// 1. **Hit the GIPHY API**.
//    * Fool around with the GIPHY API. [Giphy API](https://developers.giphy.com/docs/).
//    * Be sure to read about these GIPHY parameters (hint, hint):
//      * `q`
//      * `limit`
//      * `rating`
//    * Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true).
//    * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.
// 2. **[Watch the demo video](https://youtu.be/BqreERTLjgQ)**

// ### Instructions

// 1. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
//    * We chose animals for our theme, but you can make a list to your own liking.

var topics = [
    "laughing baby",
    "cats",
    "sleepy puppy",
    "corgi",
    "falling kid",
    "crying",
    "yay",
    "monday",
];

// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

//Creates buttons for every item in the array by first clearing out the old buttons and then creating new ones
function renderButton(){
    
    $('.buttons').empty();
    
    for (var i = 0; i < topics.length; i++){
        var b = $('<button>');
        b.addClass('topic')
        b.attr("data", topics[i]);
        b.text(topics[i]);
        $('.buttons').append(b);

    } 
}

//On clicking the submission button, adds the input to the array so that it can be rendered into a button using the renderButton function called at the end of the block
$('#add-button').on('click', function(event){
    event.preventDefault();
    
    var meme = $('#input').val();

    topics.push(meme);
    console.log(topics);

    renderButton();
})

//selects the text from inside the button and creates a URL to search Giphy for related gifs. Then displays the static gif images retrieved
function findMemes(){
    
    var interest = $(this).attr("data");
    console.log(interest);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=" + interest + "&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(queryURL);
        console.log(response.data);
        
        $('.gifs').empty();

        for(var i=0; i < response.data.length; i++){
        console.log(response.data[i].images.fixed_height_still.url);
        $('.gifs').append("<img data-state='still' class='gif' src='" + response.data[i].images.fixed_height_still.url + "' img-still='" + response.data[i].images.fixed_height_still.url+ "' img-animate='" + response.data[i].images.fixed_height.url + "'>");
        
        console.log(response.data[i].images.fixed_height.url);

        $('.gif').on('click', function(){
  
          var state = $(this).attr("data-state")
          console.log(state);
  
          if (state === 'still'){
            $(this).attr("src", $(this).attr("img-animate"))
            $(this).attr("data-state", "animate")
            }
            else {
              $(this).attr("src", $(this).attr("img-still"))
              $(this).attr("data-state", "still")
            }
        })
        }
      })

      
}
    
      
        
    


$(document).on('click', '.topic', findMemes);

renderButton();

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. USE PAUSING GIFS EXAMPLE from class

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.

// 8. **Rejoice**! You just made something really cool.

// - - -

// ### Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

// - - -

// ### Bonus Goals

// 1. Ensure your app is fully mobile responsive.

// 2. Allow users to request additional gifs to be added to the page.
//    * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

// 3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.

// 4. Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio

// 5. Allow users to add their favorite gifs to a `favorites` section.
//    * This should persist even when they select or add a new topic.
//    * If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).

// ### Reminder: Submission on BCS

// * Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

// - - -

// ### Create a README.md

// Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -

// ### One More Thing

// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

// **Good Luck!**
