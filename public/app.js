// Grab the articles as a json
$.getJSON("/articles", function (data) {
  // For each one
  let newUl = $("<ul>").addClass("list-group")

  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    let newLi = $("<li>").addClass("list-group-item").attr("data-id", data[i]._id).html(data[i].title + "<br/>" + data[i].link)
    let newButton = $("<button>").addClass("btn btn-success float-right saveArticle").text("save").attr("data-id", data[i]._id);
    newLi.append(newButton)
    newUl.append(newLi);

  }
  $("#articles").append(newUl);
});

// Delete articles
$("#clearArticles").click(() => {
  $.ajax({
    method: "GET",
    url: "/delArticles"
  })
  $("#articles").empty();
})

$(document).on("click", "#reScrape", function() {
  // Grab the id associated with the article from the submit button
  $.ajax({
    method: "GET",
    url: "/scrape",
  }).then(() => {
    // Grab the articles as a json
    $.getJSON("/articles", function(data) {
      $("#articles").empty();
      // For each one
      let newUl = $("<ul>").addClass("list-group");
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        let newLi = $("<li>")
          .addClass("list-group-item")
          .attr("data-id", data[i]._id)
          .html(data[i].title + "</br>" + data[i].link);
        let newButton = $("<button>")
          .addClass("saveArticle btn btn-outline-success float-right")
          .text("save")
          .attr("data-id", data[i]._id);
        newLi.append(newButton);
        newUl.append(newLi);
      }
      $("#articles").append(newUl);
    });
  });

});


$("#savedArticle").click(() => {
  $("#articles").empty();
  // Grab the articles as a json
  $.getJSON("/savedArticles", function (data) {
    // For each one
    let newUl = $("<ul>").addClass("list-group")

    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      let newLi = $("<li>").addClass("list-group-item").attr("data-id", data[i]._id).html(data[i].title + "<br/>" + data[i].link)
      let newButton = $("<button>").addClass("btn btn-danger float-right deleteArticle").text("X").attr("data-id", data[i]._id);
      newLi.append(newButton)
      newUl.append(newLi);

    }
    $("#articles").append(newUl);
  })
});

$(document).on("click", ".saveArticle", function () {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done
    .then(function (data) {
      console.log(data);
      $.ajax({
        method: "POST",
        url: "/savedArticles",
        data: {
          title: data.title,
          link: data.link
        }
      })
    });
});

$(document).on("click", ".deleteArticle", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  $.ajax({
    method: "GET",
    url: "/deleteArticle/" + thisId,
  }).then(()=>{
    $("#articles").empty();
    // Grab the articles as a json
    $.getJSON("/savedArticles", function(data) {
      // For each one
      let newUl = $("<ul>").addClass("list-group");
  
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        let newLi = $("<li>")
          .addClass("list-group-item")
          .attr("data-id", data[i]._id)
          .html(data[i].title + "</br>" + data[i].link);
        let newButton = $("<button>")
          .addClass("deleteArticle btn btn-outline-success float-right")
          .text("X")
          .attr("data-id", data[i]._id);
        newLi.append(newButton);
        newUl.append(newLi);
      }
      $("#articles").append(newUl);
    });
  })
});
