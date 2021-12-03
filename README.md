# Project Overview

## Project Name

Pokemon Team Builder

## Project Description

The main goal of this app is to get the user to create a team of pokemon, upload it to the API and be able to see other peoples uploaded teams. It will feature a form to get data from the user and a number of pages to navigate. The user will input their team and when the form is submitted it will grab that data from the pokeapi and store it in the airtable API for that user.

## Wireframes

![Landing Page](/pkmnteam/project_imgs/landing-page.png)

![Team Building Form](/pkmnteam/project_imgs/team-form.png)

![List of Uploaded Teams](/pkmnteam/project_imgs/team-list.png)



## Component Hierarchy
![Component Hierarchy](/pkmnteam/project_imgs/component-heirarchy.png)

## API and Data Sample

airtableAPI
```json
{
    "records": [
        {
            "id": "recegoApPe2WiXMvC",
            "fields": {
                "teamName": "Team Red",
                "likes": 999,
                "pkmn4": "Blastoise",
                "pkmn2": "Venusaur",
                "pkmn6": "Snorlax",
                "pkmn5": "Lapras",
                "pkmn1": "Pikachu",
                "name": "Red",
                "pkmn3": "Charizard"
            },
            "createdTime": "2021-12-01T20:52:17.000Z"
        },
```

Pokeapi.co
```
{
  "id": 413,
  "name": "wormadam",
  "order": 441,
  "gender_rate": 8,
  "capture_rate": 45,
  "base_happiness": 70,
  "is_baby": false,
  "is_legendary": false,
  "is_mythical": false,
  "hatch_counter": 15,
  "has_gender_differences": false,
  "forms_switchable": false,
  "growth_rate": {
    "name": "medium",
    "url": "https://pokeapi.co/api/v2/growth-rate/2/"
  },
```

### MVP

- Retrieve data from my airtable API and the PokeAPI
- Render data on page 
- Allow user to add a team to the airtable API

### PostMVP  

- add a like button
- Use local storage to save user favorites
- add a team inspect page
- ![Team Inspection Page](/pkmnteam/project_imgs/team-inspect.png)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 2| Project Approval, Start building framework | Incomplete
|Dec 3| Get App to retrieve/display appropriate API data| Incomplete
|Dec 4| Build application logic | Incomplete
|Dec 5| Build application logic | Incomplete
|Dec 6| Finalize any remaining code, Add notation, Styling for Desktop | Incomplete
|Dec 7| Styling for Mobile | Incomplete
|Dec 8| MVP | Incomplete
|Dec 9| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Clone repo and install dependancies | H | .5 hrs |.25 hr |
| Create base framework for code () | H | 1.5 hrs | :---: |
| Create component for APIs | H | 3 hrs | :---: |
| Testing API | M | 1hr | :---: |
| Create component for Form | H | 3 hrs | :---: |
| Testing Forms | M | 1 hr | :---: |
| Make user input pull data from API | H | 2 hrs | :---: |
| Create components for team list page | H | 3 hrs | :---: |
| Display team lists on the team list page | H | 2 hrs | :---: |
| Create component for Header | M | 2 hrs | :---: |
| Create component for Footer | M | 2 hrs | :---: |
| Test Header and Footer | L | .5 hrs | :---: |
| Style app for desktop | H | 3 hrs | :---: |
| Style app for mobile | L | 3 hrs| :---: |
| Total | | 27.5 hrs|   |

## SWOT Analysis

### Strengths:
- Styling

### Weaknesses:
- Passing info through components

### Opportunities:
- try out mediaUI react library

### Threats:
- Getting the API data from airtable to pokeapi to the user
