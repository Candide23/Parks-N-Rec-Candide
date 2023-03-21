# Parks-N-Rec-Candide

As a group, we are building an improved web application for communicating news, alerts, and accessibility information about National Parks, which we intend to be used as a template for State parks. We found that park websites display inconsistent information and can make it difficult to find details on park accessibility, which can discourage disabled people from planning visits. Our project makes it easy to find information and can be adapted by states to display their state park information consistently across all parks. 

My role was to create  a React component named SearchByName which allows the user to search for national parks in the United States. The component fetches data from the National Park Service (NPS) REST API using a specific API key and stores it in the data state variable. The user`s input for park name search is stored in the searchTerm state variable. Whenever the user types in the search bar, the handleSearch function is called, which updates the searchTerm state with the user input. The data array is then filtered using the filterParkNames function, and each item is mapped to a Card component from the react-bootstrap library. Finally, the component returns a div element containing the search bar and the list of national parks returned by the API after filtering by search term.

🚀 Technologies
![Screenshot 2022-10-19 at 10 42 29](https://user-images.githubusercontent.com/89795037/196739609-783939b6-9dac-4386-a817-963088a853c3.png)

![Screenshot 2022-10-19 at 10 42 58](https://user-images.githubusercontent.com/89795037/196739713-5323c6a8-a437-4656-8512-9a21c83d68f4.png)

![Screenshot 2022-10-19 at 10 43 52](https://user-images.githubusercontent.com/89795037/196739929-52514234-d674-49ab-9e77-a75487a3a046.png)
![Screenshot 2022-10-19 at 10 44 19](https://user-images.githubusercontent.com/89795037/196740068-da2fdadd-7fbf-408f-809f-cbbece44da86.png)
![Screenshot 2022-10-19 at 10 48 00](https://user-images.githubusercontent.com/89795037/196741000-21cd8e4e-8343-4f42-ae67-eaa73e058491.png)
![Screenshot 2022-10-19 at 10 48 24](https://user-images.githubusercontent.com/89795037/196741094-6f0935d1-5ee8-40cf-ac6d-50d16efebe9f.png)
![Screenshot 2022-10-19 at 10 50 14](https://user-images.githubusercontent.com/89795037/196741555-1f23f9c1-ac74-4691-9df5-96d34bab6b1e.png)


This project was developed with the following technologies:


Javascript

Java

ReactJs

RESTful API

Bootstrap

MySQL

Spring Boot

📘 How To Use

# Clone this repository
$ git clone https://github.com/Candide23/Parks-N-Rec-Candide.git

 Go into the repository
 
$ cd Parks-N-Rec-Candide

$ cd src

$ cd main

$ cd ui

# Install dependencies

$ npm install


# Start the application

$ npm start


