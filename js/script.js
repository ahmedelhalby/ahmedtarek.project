let price = document.getElementById('fill-one')
let line = document.getElementById('line')
let password = document.getElementById('fill')
let line_2 = document.getElementById('line-2')
let line_3 = document.getElementById('line-3')

function gettotal(){
        if(price.value != ''){
            line.style.display = `block`
        }
        else{
            line.style.display = `none`
        }
    }
    function gettot(){
        console.log('done')
            if(password.value != ''){
                line_2.style.display = `block`
            }
            else{
                line_2.style.display = `none`
            }
        }
    function reachline(){
        line_3.style.display = `block`
    }
    function removeline(){
        line_3.style.display = `none`
    }
    
