# importing required modules
from selenium import webdriver
from time import sleep

# assigning url in the webdriver object
driver = webdriver.Chrome("/Users/Harshita/Downloads/chromedriver_win32")
driver.get("https://www.google.com/maps/@18.5841853,73.9841559,15z")
sleep(2)

# searching locations
def searchplace():
    Place = driver.find_element_by_class_name("tactile-searchbox-input")
    Place.send_keys("Mumbai")
    Submit = driver.find_element_by_xpath(
        "/html/body/jsl/div[3]/div[9]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/button")
    Submit.click()
searchplace()

#getting directions
def directions():
    sleep(10)
    directions = driver.find_element_by_xpath(
        "/html/body/jsl/div[3]/div[9]/div[8]/div/div[1]/div/div/div[4]/div[1]/div/button")
    directions.click()
directions()

#finding place
def find():
    sleep(6)
    find = driver.find_element_by_xpath(
        "/html/body/jsl/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div/input")
    find.send_keys("Pune")
    sleep(2)
    search = driver.find_element_by_xpath(
        "/html/body/jsl/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]/button[1]")
    search.click()
find()

# get transportation details: Total Kilometers
def kilometers():
    sleep(5)
    Totalkilometers = driver.find_element_by_xpath(
        "/html/body/jsl/div[3]/div[9]/div[8]/div/div[1]/div/div/div[7]/div/div/div[1]/div[1]/div[2]/div")
    print("Total Kilometers:", Totalkilometers.text)
    sleep(5)
kilometers()
