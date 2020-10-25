import Algorithmia
import requests
from bs4 import BeautifulSoup
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}

client = Algorithmia.client("sim9LoB8LAv0L/5E/C3TnewZ0ua1")

def get_urls(ticker):
    website = "https://www.google.com/finance/quote/" + ticker + ":NYSE"
    html = requests.get(website, headers = headers)

    soup = BeautifulSoup(html.content , 'lxml')

    # links = soup.find_all('a')
    links = soup.findAll("div", {"class": "AoCdqe"})

    urls = [link.text for link in links]
    return urls

def find_sentiment(ticker):
    data = get_urls(ticker)
    algo = client.algo("nlp/SentimentAnalysis/1.0.2")
    try:
        # Find the sentiment score for each article
        algo_input = [{"document": item} for item in data]
        algo_response = algo.pipe(algo_input).result
        algo_final = [{"sent": sent["sentiment"], "content": sent["document"]} for sent in algo_response ]
    #         print(algo_final)
        sum = 0
        for ans in algo_final:
            sum = sum + ans.get('sent')
        avgSentiment = sum/(len(algo_final))
        return avgSentiment
    except Exception as e:
        print(e)

ans = find_sentiment("SNAP")
ans

    #ONLY WORKS FOR NYSE STOCKS FOR NOW
    #change word in 'website' inside get_url function to make it NASDAQ
