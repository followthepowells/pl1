//Name:Janelli Powell
//Course: GEOM99
//Date: January 28th, 2022
//Description: Exploring Marker Accessibility and more!
//This code creates 30 accessible markers
//The markers are then categorized by customized icons to indicate if I've visited the specific Maple Farm or not
//The user can hover the mouse on the marker to view the name and address of the Maple Farm
//Finally, a legend has been added and positioned at the bottom-left to futher tell the story
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 44.53282, lng: -78.90728 },
    });

    //Creating customized icons
    const iconBase = "http://maps.google.com/mapfiles/kml/paddle/";
    const icons = {
        red: {
          name: "To be explored one day",
          icon: iconBase + "red-stars.png",
        },
        yellow: {
          name: "Been here",
          icon: iconBase + "ylw-stars.png",
        },
    };

    //Defining constant array - are fixed - identifier can't be reassigned
    const locations = [ 
        [{ lat: 45.247, lng: -76.311}, "Fulton's Pancake House & Sugar Bush", "399 Sugar Bush Rd, Pakenham", "yellow"], 
        [{ lat: 45.4848, lng: -75.4208}, "Proulx Maple & Berry Farm", "1865 O'Toole Rd, Cumberland", "red"],
        [{ lat: 45.26313, lng: -75.4347}, "Stanley's Olde Maple Lane Farm", "2452 York's Corners Rd, Edwards", "red"],
        [{ lat: 44.92788, lng: -76.54078}, "Wheelers Pancake House, Sugar Camp & Museums", "1001 Highland Line, McDonalds Corners", "red"],
        [{ lat: 45.037705, lng: -76.28578}, "Temples Sugar Bush", "1700 Ferguson Falls Rd, Lanark.", "red"],
        [{ lat: 45.235899, lng: -74.92616}, "Sand Road Maple Farm", "Sand Road, Moose Creek", "red"],
        [{ lat: 44.17007, lng: -77.61218}, "Bata Maple Sugar Bush", "254 Bata Road, Quinte West", "red"],
        [{ lat: 44.34218, lng: -77.172621}, "Trillium Ridge Sugarworks", "254 Maple Sugar Rd, Shannonville", "red"],
        [{ lat: 43.1115, lng: -81.6319}, "Fort Rose Maple Company", "27382 Coldstream Rd, Parkhill", "red"],
        [{ lat: 43.06438, lng: -80.77606}, "Jakeman's Maple Products", "454414 Trillium Line, Beachville", "red"],
        [{ lat: 44.18758, lng: -77.95981}, "Mapleside Sugar Bush", "166 Reiche Rd., Pembroke", "red"],
        [{ lat: 44.1874562, lng: -77.959885}, "Sandy Flat Sugar Bush & Pancake House", "500 Concession Rd 3 W, Warkworth", "red"],
        [{ lat: 44.8075, lng: -76.7092}, "Conboy's Maple", "2559 Bell Line Rd, Sharbot Lake", "red"],
        [{ lat: 44.97832, lng: -79.20507}, "Sweet Water Maple Syrup", "1447 Peterson Rd, Bracebridge", "red"],
        [{ lat: 43.52792, lng: -80.44529}, "Synder Heritage Farms", "1213Maple, Bend Road, Bloomingdale", "red"],
        [{ lat: 42.9907, lng: -81.4635}, "McLauhlan Family Pancake House", "10279 Lamont Dr, Kamoka", "red"],
        [{ lat: 42.6599, lng: -81.30346}, "Palmer's Maple Syrup", "34308 Lake Line, Port Stanley", "red"],
        [{ lat: 42.91828, lng: -79.69474}, "Richardson's Farm & Market", "131 River Road, Dunnville", "red"],
        [{ lat: 43.13347, lng: -81.9819}, "Ryan's Sweet Maple", "8350 Rawlings Rd, Lambton Shores", "red"],
        [{ lat: 44.91278, lng: -78.63327}, "Wintergreen Maple Products & Pancake Barn", "3325 Gelert Rd, Minden, ON K0M 2K0", "red"],
        [{ lat: 44.98685, lng: -78.00826}, "Camp Can-Aqua Maple Syrup & Supplies", "503 Beaver Lake Drive, Box 70, Cardiff", "red"],
        [{ lat: 43.70064, lng: -80.99253}, "Hoover's Maple", "5896 Line 78, RR # 1 Atwood", "red"],
        [{ lat: 43.2996, lng: -80.2139}, "Rock Maple Lodge", "2491 Norman Rd. Branchton", "red"],
        [{ lat: 42.732, lng: -80.7581}, "Our Sugar Bush", "8759 Toll Gate Rd. Straffordville", "red"],
        [{ lat: 43.0716, lng: -81.177}, "Kinsmen Fanshawe Sugar Bush", "21201 Lakeside Dr. Thorndale", "red"],
        [{ lat: 45.2579, lng: -79.2169}, "Sugarbush Hill Maple Farm", "2389 Muskoka Rd 10 West, Huntsville", "red"],
        [{ lat: 46.06278, lng: -79.43719}, "Matthews Maple Syrup", "239 Ski Hill Road, Powassan", "red"],
        [{ lat: 46.0668, lng: -79.4559}, "Bella Hill Maple Syrup", "47 Bella Hill Road, Powassan", "red"],
        [{ lat: 46.18907, lng: -84.04116}, "Gilbertson's Maple Products", "3365 A Line, Richards Landing", "red"],
        [{ lat: 43.91169, lng: -77.24177}, "Fosterholm's Farmer's Market", "2102 County Road 18, Prince Edward, ON K0K", "yellow"]
    ];

    // Creating an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Creating the markers with a loop
    locations.forEach(([position, title, address, type], i) => {

        const marker = new google.maps.Marker({
            position,
            map,
            title: "<b>"+`${title}`+"</b>" +"<br />" +`${address}`, //set the name and address as a title to display later on                  
            icon: icons[type].icon, //these icons will indicate if I've visited that Maple Farm 
            optimized: false,
        });
  
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("mouseover", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });

    //Creating Legend
    const legend = document.getElementById("legend");
    for (const key in icons) {
        const type = icons[key];
        const name = type.name;
        const icon = type.icon;
        const div = document.createElement("div");
    
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }
    //Positioning the legend at the left-bottom of the map
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend); 
  }