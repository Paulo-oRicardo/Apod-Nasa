class Model{
   //Contrutor 
   constructor(){
      this._description ="";
      this._img = "";
      this._date ="";

   }
   //Pega os dados do constructor, de forma a ficar "seguro"
   get date (){
      return this._description;
   }
   get img(){
      return this._img;
   }
   get date(){
      return this._date;
   }

   //Request para API
   requestDate(date){
      let request = new XMLHttpRequest;
      this._data = date;
      request.open("GET",`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${this._data}`,false);

      request.addEventListener('load', () => {
         //Volta a request caso seja válido
         if(request.status === 200){
            let response = JSON.parse(request.responseText);
            this._img = response.url;
            this._description = response.explanation;
         }
         else{ // Caso não consiga buscar 
            alert(`Algo de errado não deu certo, ERROR: [${request.status}] ${request.statusText}`);
         }
      })
      request.send();
   }
}