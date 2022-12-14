# Calculando tempo que demorei para baixar os vídeos
import time
start_time = time.time()
import json

# Automation Imports - Selenium
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.support import expected_conditions as EC

from time import sleep

# Download imports - Pytube
from pytube import YouTube
from pytube import Channel
from pytube import extract

# Requests for the thumbnails
import requests

# Firebase imports
import firebase_admin
from firebase_admin import credentials, firestore
# functions
# Extract the Thumbnail
def extract_thumb(href, yt):
    img_data = requests.get(yt.thumbnail_url).content
    id = extract.video_id(href)

    with open('thumbs/thumb_' + str(id) +'.jpg', 'wb') as handler:
        handler.write(img_data)

# capturing links from YouTube search
def automation(busca):
    options = webdriver.FirefoxOptions()
    options.add_argument("--headless")
    service = FirefoxService('~/local/bin/geckodriver')
    driver = webdriver.Firefox(options = options, service = service)
    # driver.set_window_size(1920, 1080)
    # driver.maximize_window()
    driver.get("https://www.youtube.com")

    # Buscando no YT
    driver.find_element(by=By.XPATH, value="//div/input[@id='search']").send_keys(busca)

    sleep(2)
    driver.find_element(by=By.XPATH, value="//button[@id='search-icon-legacy']").click()
    # driver.find_element(by=By.XPATH, value="//button[@id='search-icon-legacy']").click()

    # WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, "//button[@id='search-icon-legacy']"))).click()
    html = driver.current_url
    driver.get(html)
    sleep(4)

    # Capturando links dos víedos relacionados a pesquisa
    hrefs = [video.get_attribute('href') for video in driver.find_elements(by=By.XPATH, value="//a[@id='thumbnail']") if video.get_attribute('href') is not None] 
    hrefs = [href for href in hrefs if href is not None]
    driver.close()
    return hrefs
# Download a list of YouTube Videos
data = []
def download(hrefs):
    print("\n Downloading: \n\n")
    i = 0
    for href in hrefs:
        if i >= 3:
            print("Parando Downloads")
            break
        print("link", href)
        try:
            yt = YouTube(href) 

            # stream = yt.streams.filter(progressive = True).get_highest_resolution()
            
            videoInfo = {
                "id": extract.video_id(href),
                "title": yt.title,
                "channel_url": yt.channel_url,
                "channel_name": Channel(yt.channel_url).channel_name,
                "thumb": yt.thumbnail_url,
                "busca": busca,
                "descricao": yt.description,
                "duracao": yt.length,
                "date": str(yt.publish_date)[:10],
                "views": yt.views,
                "created_at": time.time()

                # "metadata": yt.metadata
            }
            data.append(videoInfo)

            print(videoInfo)

            # stream.download(output_path = "videoData/videos", filename = str(yt.title + "_" + extract.video_id(href)) + ".mp4")
            extract_thumb(href, yt)
            print("\n\n")
        except Exception as e: 
            print(e)
        i = i + 1
    return data
# Main
# Firebase
cred = credentials.Certificate('firebase/gglobo-live-encoder-8k-hdg-dev-576a18cbe7cf.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

print("")
busca = "Iron Maiden"
hrefs = automation(busca=busca)

videoData = download(hrefs)

for dictItem in videoData:
    doc_ref = db.collection(u'videoData').document(dictItem["title"])
    doc_ref.set(dictItem)

with open("videoInfo.json", "w") as outfile:
    json.dump(data, outfile)

for href in hrefs:
    print(href)

# Calculando o tempo de execução
print("--- %s segundos ---" % (time.time() - start_time))