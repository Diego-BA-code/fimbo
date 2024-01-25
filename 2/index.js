var width = $(window).width();
var projectLoaded = false;
window.onscroll = function () {
    if ((width >= 1000)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background", "#fff");
            $("#header").css("color", "#000");
            $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding", "4vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            if (!projectLoaded) {
                $("#header").css("background", "transparent");
                $("#header").css("color", "#fff");
                $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
                $("#header").css("padding", "6vh 4vw");
                $("#navigation a").hover(function () {
                    $(this).css("border-bottom", "2px solid #fff");
                }, function () {
                    $(this).css("border-bottom", "2px solid transparent");
                });
            }
        }
    }
}



setTimeout(function () {
    $("#loading").addClass("animate__animated animate__fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animate__animated animate__fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1650);

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
});

//   load the project depending on the image clicked and display or hide the div with the projects and the div with the project
$(document).ready(function () {
    $("[id^='project_']").click(function () {
        var projectId = $(this).attr("id");
        var projectNumber = projectId.split("_")[1];
        var projectFile = "project" + projectNumber + ".html";
        projectLoaded = true;
        // Hide the div with the projects and show the div with the project
        $("#project").load(projectFile, function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $("#top_part, #work").fadeOut(function () {
                    $("#project").show().addClass("animate__animated fadeIn");
                    $('html, body').animate({
                        scrollTop: $("#project").offset()
                    }, 1000);
                });
            }
            if (statusTxt == "error") {
                projectLoaded = false;
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });
    });
});

// Show the div with the projects and hide the div with the project
$("#go_work").click(function (event) {
    event.preventDefault(); // Prevents the default scroll behavior
    // Hide the div with the project and show the div with the projects
    $("#project").fadeOut(function () {
        $("#work, #top_part").fadeIn();
        projectLoaded = false;
        // Smoothly scroll to the div with the projects
        $('html, body').animate({
            scrollTop: $("#work").offset().top - 50
        }, 1000);
    });
});

$(document).ready(function () {
    // Función de clic para #go_about
    $("#go_about").click(function (event) {
        event.preventDefault(); // Previene el comportamiento de desplazamiento predeterminado

        // Desplaza suavemente hacia el div con los proyectos
        $('html, body').animate({
            scrollTop: $("#bio").offset().top - 50
        }, 1800);
    });

    // Función de clic para #go_contact
    $("#go_contact").click(function (event) {
        event.preventDefault(); // Previene el comportamiento de desplazamiento predeterminado

        // Desplaza suavemente hacia el div con los proyectos
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 50
        }, 1800);
    });
});