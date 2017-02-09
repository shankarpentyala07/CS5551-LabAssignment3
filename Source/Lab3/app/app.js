7/**
 * Created by shankar pentyala on 08-02-2017.
 */


angular.module("myapp",[])
.controller("mycntrl",function($scope,$http)
{
$scope.Searchis = function() {
    $scope.name1='';
    $scope.desc1='';
    $scope.ddesc1='';
    $scope.imgurl = ' ';
    var inp = document.getElementById("txt_searchFilter").value;
    var result = $http.get("https://kgsearch.googleapis.com/v1/entities:search?query="+ inp +
     "&key=AIzaSyB82KHibkqFCPiYbTs-G_Z60Y-YjM2dEU8&limit=1&indent=True");
        result.success(function(data)
        {
            $scope.name1 ="Data Not Found";
            if(data.itemListElement[0].result.name != null && data.itemListElement[0].result.name != " ")
            {
                $scope.name1 =data.itemListElement[0].result.name;
            }
         $scope.name1 = data.itemListElement[0].result.name;
         $scope.desc1 = data.itemListElement[0].result.description;
         $scope.ddesc1 = data.itemListElement[0].result.detailedDescription.articleBody;
         $scope.imgurl = data.itemListElement[0].result.image.contentUrl;

        }
    )
    result.error(function (data) {
        alert("There was some error processing your request. Please try after some time");

    })
}

$scope.getaudio = function(ddesc12)
{

    var SpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=da549454-6579-4395-bd8d-a0c4167d342a&password=mbhZAmDVQyzn&text='+ddesc12;


    document.getElementById("Audio").innerHTML= "<video controls='' autoplay='' name='media'><source src='"+SpeechUrl+"' type='audio/ogg'></video>";
}

});
