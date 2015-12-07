//This .js file is created to generate the table of
//commits from your GitHub page.  You are able
//to create a list of all the repos and are
//able to view the information such as
//sha, author, commit message, and date.


$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++) {
          $("tbody").append(buildTableRow(commits[i]));
        }
      }
    });
  });

  function buildTableRow(commitData) {
    var shaTd = $("<td>").append(commitData.sha);
    var authorTd = $("<td>").append(commitData.author.login);
    var messageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);

    return $("<tr>").append(shaTd)
      .append(authorTd)
      .append(messageTd)
      .append(dateTd);
  }
});