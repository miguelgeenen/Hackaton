$(document).ready(function () {
    addEventListener1();
    addEventListener2();
})

var arrayBeach1 = [
    {
        "id": 1,
        "name": "Brigada do Mar",
        "src": "https://www.brigadadomar.org",
        "image": "img/afg.jpg",
        "description": "a community of beach lovers to free beaches from plastic and reuse it in a creative way",
        "country": "Portugal"
    }];

var arrayBeach2 = [
    {
        "id": 2,
        "name": "Mariscar Sem Lixo",
        "src": "https://www.ocean-alive.org/mariscar-sem-lixo-page",
        "image": "resources/images/oceanAlive",
        "description": "initiative to raise awareness to avoid plastic debree amongst local fishermen",
        "country": "Portugal"
    }];

var arrayBeach3 = [
    {
        "id": 3,
        "name": "Marine Conservation Society",
        "href": "https://www.mcsuk.org/beachwatch/volunteers",
        "image": "img/beach_uk_marineconservation.png",
        "description": "volunteer initiative to clean up beaches throughout the UK where needed",
        "country": "UK"
    }];

var arrayBeach4 = [
    {
        "id": 4,
        "name": "2 Minute Beach Clean",
        "href": "https://www.surfdome.com/2-minute-beach-clean",
        "image": "img/beach_2MinuteBeachClean_logo.png",
        "description": "project to raise awareness amongst beach visitors to clean up as part of their stay",
        "country": "UK"
    }];

var arrayBeach5 = [
    {
        "id": 5,
        "name": "Ocean Conservancy",
        "href": "https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/",
        "image": "img/beach_usa_oceanConservancy.png",
        "description": "Harnessing the Power of People to Fight Ocean Trash",
        "country": "USA"
    }];

var arrayBeach6 = [
    {
        "id": 6,
        "name": "4ocean - Coastline Cleanup",
        "href": "https://4ocean.com/pages/clean-ups",
        "image": "img/beach_usa_4ocean.jpeg",
        "description": "Harnessing the Power of People to Fight Ocean Trash",
        "country": "USA"
    }];


var arrayPaddle1 = [
    {
        "id": 3,
        "name": "Sailors For The Sea Portugal",
        "src": "https://www.brigadadomar.org",
        "image": "img/afg.jpg",
        "description": "Sailors for the Sea is the world’s leading conservation organization that engages, educates, inspires and activates the sailing and boating community toward healing the ocean",
        "country": "Portugal"
    }];


var arrayPaddle2 = [
    {
        "id": 4,
        "name": "Paddle and Pick",
        "src": "https://www.ocean-alive.org/mariscar-sem-lixo-page",
        "image": "resources/images/oceanAlive",
        "description": "In these Paddle & Pick events, we let participants use paddleboards and canoes, including a short lesson if required, in return for getting involved in clearing a section of canal of plastic waste",
        "country": "UK"


    }];

var arrayPaddle3 = [
    {
        "id": 6, "name": "Swim Against Plastic",
        "href": "https://swimagainstplastic.com/",
        "image": "img/surface_chile_swim", "description": "As one of the most remote inhabited locations in the world, the island is in peril at the hands of plastic pollution",
        "country": "Chile"
    }];

var arrayPaddle4 = [
    {
        "id": 7,
        "name": "Paddle Board Cleanup",
        "href": "https://www.theseachangeagency.org/events/paddle-board-clean-up",
        "image": "img/surface_usa_paddleClean",
        "description": "Armed with trash buckets and nets, we will paddle to an area where trash is known to collect and get to work cleaning",
        "country": "USA"
    }];

var arrayScuba1 = [
    {
        "id": 8,
        "name": "ImpacTrip",
        "href": "https://www.volunteerworld.com/en/volunteer-program/marine-conservation-dive-and-clean-the-ocean-in-portugal-lisboa",
        "image": "img/dive_pt_impacTours.jpeg",
        "description": "Discover a new underwater world and contribute to clean trash from the Atlantic Ocean. From beginners to advanced divers!",
        "country": "Portugal"
    }];

var arrayScuba2 = [
    {
        "id": 9,
        "name": "Dive Against Debris",
        "src": "https://www.projectaware.org/diveagainstdebris",
        "image": "img/dive_pt_diveAgaonstDebris.jpeg",
        "description": "Don't let your dives go to waste! Grab your mesh bag, scuba gear and data card to contribute to clean up the oceans!",
        "country": "Portugal"
    }];


function addEventListener1() {
    var calendarDate;
    var company;

    $("#calendar").change(function () {
        calendarDate = $("#calendar").val();
    })

    $("inputState").change(function(){
        company =$("#inputState").val();
        console.log(company);
    })

    $("#submit").click(function (event) {
        alert("you have successfully booked your activity for the " + calendarDate);
    });

}
var form = document.getElementById("form-id");

document.getElementById("your-id").addEventListener("click", function () {
    form.submit();
});

function addEventListener2() {

    $("#portugal").click(function (event) {
        console.log("clicked");
        unpopulate();
        populate(arrayBeach1);
        populate(arrayBeach2);
        populate(arrayPaddle1);
        populate(arrayPaddle2);
        populate(arrayScuba1);
        populate(arrayScuba2)
    })

    $("#uk").click(function (event) {
        console.log("clicked");
        unpopulate();
        populate(arrayBeach3);
        populate(arrayBeach4);
        populate(arrayPaddle3);
        populate(arrayPaddle4);
    })

    $("#usa").click(function (event) {
        console.log("clicked");
        unpopulate();
        populate(arrayBeach5);
        populate(arrayBeach6);
    })

    $("#all").click(function (event) {
        console.log("clicked");
        unpopulate();
        populate(arrayBeach1);
        populate(arrayBeach2);
        populate(arrayBeach3);
        populate(arrayBeach4);
        populate(arrayBeach5);
        populate(arrayBeach6);
        populate(arrayScuba1);
        populate(arrayScuba2);
        populate(arrayPaddle1);
        populate(arrayPaddle2);
        populate(arrayPaddle3);
        populate(arrayPaddle4);
       
    })

    $("#beach-button").click(function (event) {
        console.log("clicked");
        unpopulate();
        populate(arrayBeach1);
        populate(arrayBeach2);
        populate(arrayBeach3);
        populate(arrayBeach4);
        populate(arrayBeach5);
        populate(arrayBeach6);
        console.log("populate" + populate(arrayBeach));
        //calendar
    })

    $('#scuba-button').click(function (event) {
        unpopulate();
        populate(arrayScuba1);
        populate(arrayScuba2)
        //populate(arrayScuba2);
        //calendar
    })

    $("#paddle-button").click(function (event) {
        unpopulate();
        populate(arrayPaddle1);
        populate(arrayPaddle2);
        populate(arrayPaddle3);
        populate(arrayPaddle4);
        //calendar
    })

}

function populate(data) {
    var array = data;
    array.forEach(function (company) {
        var row =
            "<br>" +
            " <h3>" + company.name + "</h3>" +
            "<div class=" + "row" + ">" +

            " </div >" +
            "<p>" +
            company.description +
            " </p><br>" +
            "</div>";

        $(row).appendTo('#activities')
    });
}

function unpopulate() {
    $("#activities").empty();
}