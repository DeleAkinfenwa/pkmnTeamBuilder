# Project Overview

## Project Name

Pokemon Team Builder

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and/or functionality.

## Wireframes

![Landing Page](/project_imgs/landing-page.png)

![Team Building Form](/project_imgs/team-form.png)

![List of Uploaded Teams](/project_imgs/team-list.png)



## Component Hierarchy
![Component Hierarchy](/project_imgs/component-heirarchy.png)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

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

### MVP

- Retrieve data from my airtable API and the PokeAPI
- Render data on page 
- Allow user to add a team to the airtable API

### PostMVP  

- add a like button
- Use local storage to save user favorites
- add a team inspect page
- ![Team Inspection Page](/project_imgs/team-inspect.png)

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

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Clone repo and install dependancies | H | .5 hrs | :---: | :---: |
| Create base framework for code () | H | 1.5 hrs | :---: | :---: |
| Create component for APIs | H | 3 hrs | :---: | :---: |
| Testing API | M | 1hr | :---: | :---: |
| Create component for Form | H | 3 hrs | :---: | :---: |
| Testing Forms | M | 1 hr | :---: | :---: |
| Make user input pull data from API | H | 2 hrs | :---: | :---: |
| Create components for team list page | H | 3 hrs | :---: | :---: |
| Display team lists on the team list page | H | 2 hrs | :---: | :---: |
| Create component for Header | M | 2 hrs | :---: | :---: |
| Create component for Footer | M | 2 hrs | :---: | :---: |
| Test Header and Footer | L | .5 hrs | :---: | :---: |
| Style app for desktop | H | 3 hrs | :---: | :---: |
| Style app for mobile | L | 3 hrs| :---: | :---: |
| Total | | 27.5 hrs|   |   |

## SWOT Analysis

### Strengths:
- Styling

### Weaknesses:
- Passing info through components

### Opportunities:
- try out mediaUI react library

### Threats:
- Getting the API data from airtable to pokeapi to the user
