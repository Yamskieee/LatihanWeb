$(document).ready(function(){
    let h2 = $('h2')
    // console.log(h2.text("Selamat Datang"))
    h2.append(' <i>Pelanggan</i>')
    h2.prepend('<i>Hello</i> ')
    h2.after('Hai')
    h2.before('Halo')
    // let input = $('input')
    // console.log(input.val())


    // h2.addClass('biru')
    // h2.removeClass('border')
    let style = {
        color: 'salmon',
        fontSize: '50px'
    }
    // h2.css(style)
    let button = $('button')
    let input = $('input')
    let p = $('p')

    // button.on('click', function(){
    //     console.log(input.val())
    // })
    button.click(function(){
       p.toggleClass('biru')
    })
})

// document.querySelector('h2').classList.add('biru')