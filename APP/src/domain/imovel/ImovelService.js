export default class ImovelService{

    constructor(resource)
    {
        this.Resource = resource('imoveis{/id}');   
    }

    listar()
    {
        return this.Resource.query()
            .then(res => res.json());
    }

    listarDisponiveis()
    {

        return this.Resource.query({disponivel: true})
            .then(res => res.json());
    }

    salvar(model)
    {
        if (model.id) {
            return this.Resource.update({id: model.id}, model);
        }
        else{            
            return this.Resource.save(model);
        }
    }

    apagar(id)
    {
        return this.Resource.delete({id});        
    }

    buscar(id)
    {
        return this.Resource.get({id})
        .then(res => res.json());
    }

}