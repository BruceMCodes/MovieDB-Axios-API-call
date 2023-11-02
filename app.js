/* 
    Name: Bruce Marshall
    Date: 10/30/2023
    Filename: app.js
    Assignment: MovieDB & Axios 
*/
// jQuery that goes into action when the document is ready
$(document).ready(() => {

    //axios get request
    axios.get("https://api.themoviedb.org/3/movie/now_playing?&api_key=78909e11c529c9d009b63366313c4b58&language=en-US&page=1")
    //upon success
    .then((response) =>
    {   
        let layout;
        /**************************************************/
        //console.log(response);
        //document.getElementById("image").src = "https://image.tmdb.org/t/p/original" + response.data.results[0].poster_path;
        //let imgSrc;
        //let backgroundImage;
        /**************************************************/

        //I know that the assignment only asked for 4 posters, however I made this in a dynamic way where you can change the value that i is less than. If you just wish to see 4 movies, replace the response.data... with 4.

        for(i = 0; i < response.data.results.length; i++){
            /**************************************************/
            //Testing with getting the image from the API call
            //$("#image" + i).attr("src", "https://image.tmdb.org/t/p/original" + response.data.results[i].poster_path);
            /**************************************************/

            //Creation of the div that will hold everything necessary for the array value of i. appended to the main div.
            $("#main").append("<div id='" + "div" + i + "' class='imgDiv'></div");
            //The following image, h1, and div are all appended to the divi (i being the iteration of the loop)
            //These are given values from the array with a value of i
            $("#div" + i).append("<img class='posterImg' id='' src='" + "https://image.tmdb.org/t/p/original" + response.data.results[i].backdrop_path + "'>");
            $("#div" + i).append("<h1 class='title' id='" + "heading" + i + "'> " + response.data.results[i].title + " </h1>");
            $("#div" + i).append("<div class='hideMe' id='" + "hideDiv" + i + "'>" + response.data.results[i].overview + "</div");
            
            /**************************************************/
            //Working with getting the backdrop image for a background image from the API call
            //Abandoned as it didn't look good
            // backgroundImage = response.data.results[i].backdrop_path;
            // $("#div" + i).css("background-image", "url(https://image.tmdb.org/t/p/original" + backgroundImage + ")");
            /**************************************************/
        }

        /**************************************************/
        //Click event for the toggle
        /**************************************************/
        $(".imgDiv").on("click", (e) => {
            //I fount that the currentTarget would get the parent of the event trigger, in this case the div#i
            //The last child of that div is the overview div
            //So we are toggling the overview div
            $(e.currentTarget.lastChild).slideToggle( "slow", () => {
            });

            /**************************************************/
            //Uncomment the below code, the .posterImg portion of the css file, and delete one of the auto's from the grid-template for a different style
            
            // Or, you could just uncomment this portion and leave the css parts commented for a cool affect
            /**************************************************/
            if (layout == 1 || layout == 3) {
                $(e.currentTarget.firstChild).slideToggle( "slow", () => {
                });
                //$(e.currentTarget.firstChild).css("display", "none")
            }
            /**************************************************/
        });

        // if (layout == 2) {
        //     $("#main").css("grid-template-columns", "auto auto")
        // }

        /******************/
        //Layouts
        $("#layoutOne").on("click", () => {
            layout = 1;
            $("#layoutOne").css('background-color', 'grey');
            $("#layoutTwo").css('background-color', '');
            $("#layoutThree").css('background-color', '');

            $("#main").css("grid-template-columns", "50%");
            $(".posterImg").css("display", "none");
        });
        $("#layoutTwo").on("click", () => {
            layout = 2;
            $("#layoutOne").css('background-color', '');
            $("#layoutTwo").css('background-color', 'grey');
            $("#layoutThree").css('background-color', '');

            $("#main").css("grid-template-columns", "auto auto");
            $(".posterImg").css("display", "");
        });
        $("#layoutThree").on("click", () => {
            layout = 3;
            $("#layoutOne").css('background-color', '');
            $("#layoutTwo").css('background-color', '');
            $("#layoutThree").css('background-color', 'grey');

            $("#main").css("grid-template-columns", "auto auto auto");
            $(".posterImg").css("display", "");
        });
        /**************************************************/
        //Working with getting the image from the API call
        //$("#image").attr("src", "https://image.tmdb.org/t/p/original" + response.data.results[0].poster_path);
        /**************************************************/
    })
    //upon failure
    .catch((err) => {
        //log the error and fill the innerHTML of the nope div with the error
        console.log(err)
        document.getElementById("nope").innerHTML = err;
        
    })

    /**************************************************/
    //Commented out code, mainly trying to work with the toggle/see why my headings were not responding. Found I needed to move them to the .then portion of the code.
        // $(".title").on("click", () => {
        //     alert("clicked");
        // });

        // $("#heading5").on("click", () => {
        //     alert("clicked");
        //     $("#hideDiv0").hide("slow", () => {
        //         alert( "Animation complete." );
        //     });

        // });
        //$( ".hideMe" ).toggle();
    /**************************************************/

});