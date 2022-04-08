        const timeStamp = "" //timestamp
        const apiKey = "" //apiKey;
        const md5 = "" //md5;
        let random = getRandomInt(100, 1490);
        let limite = 20;
        console.log(random)
        fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=${limite}&offset=${random}`
        ).then((response) => {
            return response.json();
        }).then((jsonParsed) => {
            const divHero = document.querySelector('#herois');

            jsonParsed.data.results.forEach(element => {
                const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
                const nameHero = element.name;
                if(element.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && element.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif" ){
                    createDivHero(srcImage, nameHero, divHero);
                }
                    
            });
            console.log(jsonParsed);
        })

        function createDivHero(srcImage, nameHero, divToAppend) {
            const divPai = document.createElement('div')
            const divFilho = document.createElement('div')
            const textName = document.createElement('text')
            const img = document.createElement('img')
            
            textName.textContent = nameHero
            img.src = srcImage

            divFilho.appendChild(img)
            divFilho.appendChild(textName)
            divPai.appendChild(divFilho)
            divToAppend.appendChild(divPai)

            divPai.classList.add("Personagem")
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
