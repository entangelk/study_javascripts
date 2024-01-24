    window.onload= async (event) => {
        let pagenum = 1;
    
        let url = `https://apis.data.go.kr/5690000/sjMusicIndustryStatus/sj_00000710?serviceKey=U7qOOR4KMrkRvFHfQjd8XQh1DJraaYLetyiqIfNiJEsrwG%2BHRWhPpfVffZDjB0aJtFc9eSmc6tR1iWQat2Stew%3D%3D&pageIndex=${pagenum}&pageUnit=200&dataTy=json`;
        let options = {}; // python dict
        try{
           let response = await fetch(url, options); // send
           var result = await response.json();
           var indusrty_list = result.body.items
            

           let page_list = indusrty_list.slice(pagenum,pagenum+20)

           let get_list ='';
           for (let objects of page_list){
               get_list = `${get_list}<tr><td>${objects['mtlty']}</td><td>${objects['roadNmAddr']}</td><td>${objects['induty']}</td></tr>`;
           }
           
           let get_element = document.querySelector("#api_input");
           get_element.innerHTML = get_list;

        } catch(error){
            console.log(`Error Message : ${error.message}`);
        };

    let page_count = parseInt(indusrty_list.length/20);
    let Page_count_list=``;

    let pagenation = document.querySelector("#page_list");
    for (let i=1; i<=page_count; i++){

        Page_count_list = `${Page_count_list}<button class='btn btn-light' id='page_count${i}'>${i}</button>`;
     
    }
   
    pagenation.innerHTML=Page_count_list;
    


    let pre_page = document.querySelector("#pre_page");
    pre_page.addEventListener('click', async (event) => {
        if (pagenum == 1) {
            pagenum == 1
        }
        else {
            pagenum = pagenum - 1
            let page_list = indusrty_list.slice(pagenum*20,(pagenum+1)*20)

            let get_list ='';
            for (let objects of page_list){
                get_list = `${get_list}<tr><td>${objects['mtlty']}</td><td>${objects['roadNmAddr']}</td><td>${objects['induty']}</td></tr>`;
            }
            let get_element = document.querySelector("#api_input");
            get_element.innerHTML = get_list;
        
        }
            

    } )
    
    let next_page = document.querySelector("#next_page");
    next_page.addEventListener('click', async (event) => {
           if (pagenum == parseInt(indusrty_list.length/20)) {
            pagenum == parseInt(indusrty_list.length/20)
        }
        else {
            pagenum = pagenum + 1
            let page_list = indusrty_list.slice(pagenum*20,(pagenum+1)*20)


            let get_list ='';
            for (let objects of page_list){
                get_list = `${get_list}<tr><td>${objects['mtlty']}</td><td>${objects['roadNmAddr']}</td><td>${objects['induty']}</td></tr>`;
            }

            let get_element = document.querySelector("#api_input");
            get_element.innerHTML = get_list;
        
        }
    } )


};
