class Controller{
   busca(date){
      let model = new Model;
      model.requestDate(date);

      let view = new Views(model);
      view.Elements();
   }
}
