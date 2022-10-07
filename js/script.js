$(document).ready(function () {
  $("#yes").click(function () {
    $("#hide").fadeOut();
    $("#dating").fadeIn();
  })
  $("#no").click(function () {
    $("#hide").fadeOut();
    $("#img").fadeIn();
  })
  $("#dating").submit(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let maleGender = $("#gender").val();
    $(".name").text(name);
    if (maleGender == "female") {
      $("#girl").show();
      $("#dating").hide();
    }
    else {
      $(".boy").show();
      $("#dating").hide();
    }
  })
  //MALE FORM IF STATEMENTS::

  $(".boy").submit(function (e) {
    e.preventDefault();
    let age = $("#age").val();
    let hobby = $("#hobbies").val();
    let height = $("#height").val();
    let nation = $("#nationality").val();

    if (age == "1") {
      if (hobby == "1") {
        if (height == "1") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else if (height == "2") {
          if (nation == "1") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else {
          if (nation == "1") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == 3) {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }

      }
      else if (hobby == "2") {
        if (height == "1") {
          if (nation == "1") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == 3) {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else if (height == "2") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else {
          if (nation == "1") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }

      }
      else {
        if (height == "1") {
          if (nation == "1") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == 3) {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else if (height == "2") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else {
          if (nation == "1") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }

      }


    }
    else if (age == "2") {
      if (hobby == "1") {
        if (height == "1") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else if (height == "2") {
          if (nation == "1") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else {
          if (nation == "1") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
      }
      else if (hobby == "2") {
        if (height == "1") {
          if (nation == "1") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else if (height == "2") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else {
          if (nation == "1") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
      }
      else {
        if (height == "1") {
          if (nation == "1") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else if (height == "2") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div3").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
        else {
          if (nation == "1") {
            $("#div4").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == 3) {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
      }
    }
    else {
      if (hobby == "1") {
        if (height == "1") {
          if (nation == "1") {
            $("#div1").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "2") {
            $("#div2").fadeIn();
            $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div3").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//         else if (height == "2") {
//           if (nation == "1") {
//             $("#div4").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "2") {
//             $("#div5").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div6").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//         else {
//           if (nation == "1") {
//             $("#div5").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "2") {
//             $("#div4").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div3").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//       }
//       else if (hobby == "2") {
//         if (height == "1") {
//           if (nation == "1") {
//             $("#div2").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "2") {
//             $("#div1").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div6").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//         else if (height == "2") {
//           if (nation == "1") {
//             $("#div1").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "2") {
//             $("#div2").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div3").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//         else {
//           if (nation == "1") {
//             $("#div4").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "2") {
//             $("#div5").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div6").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//       }
//       else {
//         if (height == "1") {
//           if (nation == "1") {
//             $("#div2").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "2") {
//             $("#div1").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div6").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//         else if (height == "2") {
//           if (nation == "1") {
//             $("#div1").fadeIn();
//             $(".boy").fadeOut();

//           }
//           else if (nation == "2") {
//             $("#div2").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else if (nation == "3") {
//             $("#div3").fadeIn();
//             $(".boy").fadeOut();
//           }
//           else {
//             $("#div7").fadeIn();
//             $(".boy").fadeOut();
//           }
//         }
//         else {
//           if (nation == "1") {
//             $("#div4").fadeIn();
//             $(".boy").fadeOut();

          }
          else if (nation == "2") {
            $("#div5").fadeIn();
            $(".boy").fadeOut();
          }
          else if (nation == "3") {
            $("#div6").fadeIn();
            $(".boy").fadeOut();
          }
          else {
            $("#div7").fadeIn();
            $(".boy").fadeOut();
          }
        }
      }
    }
  })
})
