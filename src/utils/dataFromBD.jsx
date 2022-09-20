    const dataFromBD = [
        {
          id: 1,
          name: "Almendras",
          stock: 21,
          price: 550,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 1500,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/almendras-tostadas-sin-sal-50g4-ea28a5e8df22b84cd015716231079970-1024-1024.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-18T19:39:05.347Z",
          categoryId: 1,
          brandId: 95,
          packingId: null,
          category: {
            name: "Alimentos Sanos",
            id: 1
          },
          brand: {
            id: 1,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 2,
          name: "Castañas de Cajú",
          stock: 21,
          price: 750,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 1500,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/caju-11-1171b55b28eeba2ada16011431230468-640-0.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-18T19:39:05.347Z",
          categoryId: 1,
          brandId: 95,
          packingId: null,
          category: {
            name: "Alimentos Sanos",
            id: 2
          },
          brand: {
            id: 2,
            name: "Sur Alimenticio"
          },
          reviews: [
            {
              "comment": "Muy rico y refrescante",
              "rating": "4"
            }
          ]
        },
        {
          id: 3,
          name: "Pistachos Salados",
          stock: 92,
          price: 1210,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 750,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/pistachos-con-sal-50g4-9b4c144badb20f20bd15716232796433-1024-1024.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.030Z",
          categoryId: 1,
          brandId: 10,
          packingId: null,
          category: {
            name: "Alimentos Sanos",
            id: 3
          },
          brand: {
            id: 3,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 4,
          name: "Arandanos Congelados",
          stock: 100,
          price: 999,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 750,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/diseno-sin-titulo-951-fb013c621a5a21322616583253674199-1024-1024.png"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.032Z",
          categoryId: 1,
          brandId: 10,
          packingId: null,
          category: {
            name: "Alimentos Sanos",
            id: 4
          },
          brand: {
            id: 4,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 5,
          name: "Frutillas Congeladas",
          stock: 100,
          price: 865,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 750,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/diseno-sin-titulo-941-1285e66e7b07bdee9016583260772269-1024-1024.png"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.031Z",
          categoryId: 1,
          brandId: 10,
          packingId: null,
          category: {
            name: "Alimentos Sanos",
            id: 5
          },
          brand: {
            id: 5,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 6,
          name: "Mix Frutas Rojas Congeladas",
          stock: 200,
          price: 1350,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 750,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/diseno-sin-titulo-961-09018c5a4c6ad4454316583258879210-1024-1024.png"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.030Z",
          categoryId: 1,
          brandId: 16,
          packingId: null,
          category: {
            name: "Alimentos Sanos",
            id: 6
          },
          brand: {
            id: 6,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 7,
          name: "Pasas con Chocolate",
          stock: 89,
          price: 490,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 750,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/pasas-con-chocolate-100g4-84c1c4e7497174e0c015716234966873-1024-1024.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.032Z",
          categoryId: 2,
          brandId: 16,
          packingId: null,
          category: {
            name: "Dulces",
            id: 1
          },
          brand: {
            id: 7,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 8,
          name: "Confites con Chocolate",
          stock: 100,
          price: 420,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 375,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/confites1-ba07fe467c36c3d3ed16246082147841-1024-1024.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.032Z",
          categoryId: 2,
          brandId: 16,
          packingId: null,
          category: {
            name: "Dulces",
            id: 2
          },
          brand: {
            id: 8,
            name: "Sur Alimenticio"
          },
          reviews: []
        },
        {
          id: 9,
          name: "Jugos Detox Naturales Cuarto Creciente",
          stock: 210,
          price: 290,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 750,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo-detox1-d65e07fd52d33e017316169853118163-640-0.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-20T16:10:21.032Z",
          categoryId: 3,
          brandId: 16,
          packingId: null,
          category: {
            name: "Bebidas",
            id: 1
          },
          brand: {
            id: 1,
            name: "Cuarto Creciente"
          },
          reviews: []
        },
        {
          id: 10,
          name: "Leche de Almendras Pampa Vida, 1 Litro",
          stock: 100,
          price: 500,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
          capacity: 700,
          image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo11-95bf80191f8fabe14f16171229296141-640-0.jpg"
          ],
          sales: 0,
          createdAt: "2021-09-18T05:11:04.952Z",
          updatedAt: "2021-09-18T11:08:17.792Z",
          categoryId: 3,
          brandId: 17,
          packingId: null,
          category: {
            name: "Bebidas",
            id: 2
          },
          brand: {
            id: 2,
            name: "Pampa Vida"
          },
          reviews: []
        }
      ];
    
      module.exports = {
        dataFromBD,
}