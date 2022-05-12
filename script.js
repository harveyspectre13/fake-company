const projectsArr = [{
    name:"akshal",
    designation:"software developer",
    img:"/images/female employee.png"
  },
  {
    name:"niranjan",
    designation:"software developer",
    img:"/images/female employee.png"

  }
    
  ];
  
  const myContent = document.querySelector(".myContent");
  
  const showInHtml = projectsArr.map((project, index) => {
      return `
      <div class="row">
      <div class="card 1" style="width: 18rem; align-items: center;">
        <img src= ${project.designation} class="card-img-top"  class="d-flex ">
        <div class="card-body">
          <p class="card-text">..</p>
        </div>
      </div>
      <div class="card 2" style="width: 18rem;">
        <img src=${project.name} class="card-img-top" alt="male-emp">
        <div class="card-body">
          <p class="card-text">..</p>
        </div>
        <div class="card 2" style="width: 18rem;">
        <img src=${project.img} class="card-img-top" alt="male-emp">
        <div class="card-body">
          <p class="card-text">..</p>
        </div>


            `;
    });
  
    myContent.innerHTML = showInHtml;
  



  


  
  

