let pagenum = 1;

window.onload= async (event) => {
    let page_botton = document.querySelector("#page_button")
    page_botton.innerHTML = `<button class="btn btn-primary" id="pre_page">이전 페이지</button>
    <button class="btn btn-primary" id="next_page">다음 페이지</button>`
    let url = `https://apis.data.go.kr/5690000/sjMusicIndustryStatus/sj_00000710?serviceKey=U7qOOR4KMrkRvFHfQjd8XQh1DJraaYLetyiqIfNiJEsrwG%2BHRWhPpfVffZDjB0aJtFc9eSmc6tR1iWQat2Stew%3D%3D&pageIndex=${pagenum}&pageUnit=20&dataTy=json`;
    let options = {}; // python dict
    try{
       let response = await fetch(url, options); // send
       var result = await response.json();
       let indusrty_list = result.body.items

       let get_list ='';
       for (let objects of indusrty_list){
           get_list = `${get_list}<tr><td>${objects['mtlty']}</td><td>${objects['roadNmAddr']}</td><td>${objects['induty']}</td></tr>`;
       }
       
       let get_element = document.querySelector("#api_input");
       get_element.innerHTML = get_list;
    } catch(error){
        console.log(`Error Message : ${error.message}`);
    };
    

    // 여기서 부터는 가라로 만든 보이기만 그럴사한 페이지네이션입니다.

    let pre_page = document.querySelector("#pre_page");
    pre_page.addEventListener('click', async (event) => {
        if (pagenum == 1) {
            pagenum == 1
        }
        else {
            pagenum = pagenum - 1
            let url = `https://apis.data.go.kr/5690000/sjMusicIndustryStatus/sj_00000710?serviceKey=U7qOOR4KMrkRvFHfQjd8XQh1DJraaYLetyiqIfNiJEsrwG%2BHRWhPpfVffZDjB0aJtFc9eSmc6tR1iWQat2Stew%3D%3D&pageIndex=${pagenum}&pageUnit=20&dataTy=json`;
            let options = {}; // python dict
            try{
               let response = await fetch(url, options); // send
               let change_result = await response.json();
               let indusrty_list = change_result.body.items
        
               let get_list ='';
               for (let objects of indusrty_list){
                   get_list = `${get_list}<tr><td>${objects['mtlty']}</td><td>${objects['roadNmAddr']}</td><td>${objects['induty']}</td></tr>`;
               }
               
               let get_element = document.querySelector("#api_input");
               get_element.innerHTML = get_list;
            } catch(error){
                console.log(`Error Message : ${error.message}`);
            };
        }
    

    } )
    
    let next_page = document.querySelector("#next_page");
    next_page.addEventListener('click', async (event) => {
        if (pagenum == parseInt(result.header.totalCount/result.header.pageUnit)) {
            pagenum == parseInt(result.header.totalCount/result.header.pageUnit)
        }
        else {
            pagenum = pagenum + 1
            let url = `https://apis.data.go.kr/5690000/sjMusicIndustryStatus/sj_00000710?serviceKey=U7qOOR4KMrkRvFHfQjd8XQh1DJraaYLetyiqIfNiJEsrwG%2BHRWhPpfVffZDjB0aJtFc9eSmc6tR1iWQat2Stew%3D%3D&pageIndex=${pagenum}&pageUnit=20&dataTy=json`;
            let options = {}; // python dict
            try{
               let response = await fetch(url, options); // send
               let change_result = await response.json();
               let indusrty_list = change_result.body.items
        
               let get_list ='';
               for (let objects of indusrty_list){
                   get_list = `${get_list}<tr><td>${objects['mtlty']}</td><td>${objects['roadNmAddr']}</td><td>${objects['induty']}</td></tr>`;
               }
               
               let get_element = document.querySelector("#api_input");
               get_element.innerHTML = get_list;
            } catch(error){
                console.log(`Error Message : ${error.message}`);
            };
        }
   

   
    } )

};
