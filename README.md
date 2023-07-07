# project-3
Project 3 for Mirtha, Sydney and Netsanet

PLAN FOR PROJECT: 
1. Clean datasets first to narrow down to columns we want 
2. Transform csv data into SQL databases
3. transform into JSON by going back to python (can do mongoDB for this)
4. use Python flask API to return the JSON file (here we can set parameters/filters)
5. Start implementing into JavaScript file. We can use marker clusters to cluster points (large dataset, see 15.2 activity 3)
6. New javascript library recommended is Angular. Should help with visualizations.
7. 3 visualizations total: map (we can do interavtive options here), bar chart, and another vis. Only one interaction needed.
   * interactive map to toggle between characteristics: specialties, helipad, hospital type, number of beds, etc.
   * bar chart for numebr with highest ratings, how many hospitals in each state with high ratings
   * cluster map (similar to earthquake HW) for ratings - bigger clusters = better ratings (could also do this with number of beds)


***********************
Brainstorm for Day 1 - 
Pretend we are a patient with a rare medical condition/pre-med student wanting to specialize in something rare. Want to consider proximity to 
hospitals in a given area - what's closest, best ratings, quality of care. 
Hospital data across the US (could narrow to a specific region if are too big) 
We want to look at hospital specializations, locations/proximity to cities, etc. 

* We have CSV files for location data on hospitals from Kaggle: 
has two files with coordinates, tons of info, ratings, mortality, trauma level, etc.
* use d3.json to filter through each row in the kaggle table
* try to incorporate some demographics data to fullfill the purpose and goal of this project's storytelling
* Use the kaggle site to get started on code and loop through each row to pull the data
  
