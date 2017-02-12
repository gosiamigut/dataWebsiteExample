#!/usr/bin/env python
# Name: Emiel de Graaf
# Student number: 10645373
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    # creates an empty list for the movies
    entry_list = []
    for entry in dom.by_tag("td.title"):

        # creates an empty list for storing data about a movie
        tv_serie = []

        # collects the title and adds it to the tv_serie list
        for title in entry.by_tag("a")[:1]:
            tv_serie.append(title.content.encode("utf-8")) # encodes the info in utf-8

        # collects the ranking
        for ranking in entry.by_tag("span.value"):
            tv_serie.append(ranking.content.encode("utf-8"))

        # collects all genres
        genres_string = ""
        for genres in entry.by_tag("span.genre"):
            for genre in genres.by_tag("a"):
                if genres_string != "":
                    genres_string += ","
                genres_string += genre.content.encode("utf-8")
        tv_serie.append(genres_string)

        # collects all actors
        actors_string = ""
        for actors in entry.by_tag("span.credit"):
            for actor in actors.by_tag("a"):
                if actors_string != "":
                    actors_string += ","
                actors_string += actor.content.encode("utf-8")
        tv_serie.append(actors_string)

        # collects the runtime
        for runtime in entry.by_tag("span.runtime"):
            tv_serie.append(runtime.content.encode("utf-8"))
        entry_list.append(tv_serie);

    # returns the list with all the movie entries and info about it
    return entry_list


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])

    # writes every entry as a row
    for entry in tvseries:
        writer.writerow(entry)

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
