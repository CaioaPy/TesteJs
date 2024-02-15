const objs =  [
        {
        "nome" : "CaioEmPessoa",
        "idade" : 17,
        "trabalhador" : false,
        "detalhes_profissao" : {
            "trabalho" : null,
            "empresa" : null,
        },
        "hobbies" : ["comer", "codar", "splatoon"],
    
        },
        {
            "nome" : "jao",
            "idade" : 18,
            "trabalhador" : true,
            "detalhes_profissao" : {
                "trabalho" : "professor",
                "empresa" : "escolamerda"
            },
            "hobbies" : ["comer", "corrigirprova", "naorecebersalario"]   
        }
    ]
    
    // jason :O
    // conversão pro jason
    const jsonData = JSON.stringify(objs)

    console.log(jsonData)
    console.log(typeof jsonData)

    // convertendo jason (:O) pra obj
    const objData = JSON.parse(jsonData)

    console.log(objData)
    console.log(typeof objData)
    
    objData.map((pessoa) => {
    console.log(pessoa.nome)
    })