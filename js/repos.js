//This .js file is created to access the desired data
//from your GitHub page.  You are obtaining all the 
//necessary data from the GH page to generate the
//table of repos.


$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/MD4472/repos",
    //line 10 used to be url: "https://api.github.com/users/jquery/repos"
    success: function(repos) {
      for(var i = 0; i < repos.length; i++) {
        var newListItem = buildListGroup(repos[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("Something went wrong. We are looking into it!");
    }
  });

  function buildListGroup(repoData) {
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";
    console.log(commitsApiUrl);
    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
      console.log(newLink);
    return newLink;
  }
});