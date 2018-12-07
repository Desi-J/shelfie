let inventoryList = []
let id = 0;
module.exports = {
    createItem: (req,res) => {
        const database = req.app.get('db')
        const {image_Url, name, price} = req.body;
        
        database.create_item([image_url,name.price])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "CREATE_ITEM error"});
        console.log(error)
        })
        }

    ,

    readInventory: (req,res) => {
        const database = req.app.get('db')
        const {params} = req;

    database.read_inventory()
    .then((inventory) => res.sendStatus(200).send(inventory)
    .catch(error => {
        res.status(500).send({errorMessage: "READ_INVENTORY error"});
        console.log(error)
    }))
    },

    updateInventory: (req,res) => {
        const database = req.app.get('db');
        const {params,query} =req;

    database.update_inventory([params.id,query.desc]
        .then(()=> res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMEssage: "UPDATE error"});
            console.log(error);
        }))
    },

    deleteItem: (req,res,next) => {
        const database = req.app.get('db');
        const {params} =req;

    database.delete_product([params.id]
        .then(()=> res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMEssage: "DELETE error"});
            console.log(error);
        }));
    }
}
