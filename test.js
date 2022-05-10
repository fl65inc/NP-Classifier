looker.plugins.visualizations.add({

    id: "get",

    label: "GET",

    options: {},

    create: function(element, config){

    },

    updateAsync: function(data, element, config, queryResponse, details, done){

      fetch('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/inchiKey/DHYLGBJCEGEBGQ-UHFFFAOYSA-N/property/Title,InChIKey,MolecularFormula/json')

        .then(response => response.json())

        .then(json => {

          element.innerHTML = json.title

          done()

        })

    }

  });
