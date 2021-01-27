class Views {
   //Receber os dados 
   constructor(model){
      this._img = document.createElement("img");
      this._description = document.createElement("p");
      this._date = document.createElement("p");

      this._img.src = model.img;
      this._date.innerText = model.date;
      this._description.innerText = `Description: ${model._description}`;
      this._date.setAttribute("id", "date");
   }

   Elements(){
      this._section = document.createElement("section");
      this._section.appendChild(this_date);
      this._section.appendChild(this._img);
      this._section.appendChild(this._description);

      this._section.setAttribute("id","Container")
      document.getElementById("center").appendChild(this._section);
   }
}