// const stripe = require('stripe')(JSON.stringify((process.env.STRIPE_SECRET_KEY)));
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res, ) {
  if (req.method === 'POST') {
      // const name = req.body.name;
      // const email = req.body.email;
      // const adults = 1;
      // const children = 0;
      // const babies = 0;
      // const seniors = 1;
      const adults = req.body.adults;
      const children = req.body.children;
      const babies = req.body.babies
      const seniors = req.body.seniors
      // const arrival = req.body.arrival_date
      // const departure = req.body.departure_date
      
 
    try {
      // Create Checkout Sessions from body params.
      let temp;
       if (adults > 0 && children === undefined && babies === undefined && seniors === undefined  ) {
      //  if (adults > 0 &&(children === '0' || children === '' || children === null) && (seniors === '0' || seniors === '' || seniors === 0) && (babies === undefined || babies === '' || babies === 0)) {
         temp = await stripe.checkout.sessions.create({
           line_items: [
             {
               // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
               price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
               quantity: adults,
               adjustable_quantity: {
                 enabled: true,
               },
             },
           ],
           custom_fields: [
             // {
             //   key: 'name',
             //   label: {
             //     type: 'custom',
             //     custom: 'Full Name',
             //   },
             //   type: 'text',
             // },
             {
               key: 'arrival',
               label: {
                 type: 'custom',
                 custom: 'Estimated Arrival Date',
               },
               type: 'dropdown',
               dropdown: {
                 options: [
                   {
                     label: 'Wednesday, Oct. 16, 2024',
                     value: '101624',
                   },
                   {
                     label: 'Thursday, Oct. 17, 2024',
                     value: '101724',
                   },
                   {
                     label: 'Friday, Oct. 18, 2024',
                     value: '101824',
                   },
                   {
                     label: 'Saturday, Oct. 19, 2024',
                     value: '101924',
                   },
                   {
                     label: 'Sunday, Oct. 20, 2024',
                     value: '102024',
                   },
                   {
                     label: 'Monday, Oct. 21, 2024',
                     value: '102124',
                   },
                   {
                     label: 'Tuesday, Oct. 22, 2024',
                     value: '102224',
                   },
                   {
                     label: 'Wednesday, Oct. 23, 2024',
                     value: '102324',
                   },
                 ],
               },
             },
             {
               key: 'departure',
               label: {
                 type: 'custom',
                 custom: 'Estimated Departure Date',
               },
               type: 'dropdown',
               dropdown: {
                 options: [
                   {
                     label: 'Friday, Oct. 18, 2024',
                     value: '101824',
                   },
                   {
                     label: 'Saturday, Oct. 19, 2024',
                     value: '101924',
                   },
                   {
                     label: 'Sunday, Oct. 20, 2024',
                     value: '102024',
                   },
                   {
                     label: 'Monday, Oct. 21, 2024',
                     value: '102124',
                   },
                   {
                     label: 'Tuesday, Oct. 22, 2024',
                     value: '102224',
                   },
                   {
                     label: 'Wednesday, Oct. 23, 2024',
                     value: '102324',
                   },
                   {
                     label: 'Thursday, Oct. 24, 2024',
                     value: '102424',
                   },
                   {
                     label: 'Friday, Oct. 25, 2024',
                     value: '102524',
                   },
                 ],
               },
             },
           ],
           mode: 'payment',
           success_url: 'https://www.goshengroup.net/en/gatherings',
          //  success_url: `${req.headers.origin}/?success=true`,

           cancel_url: `${req.headers.origin}/?canceled=true`,
           automatic_tax: { enabled: false },
         });
       }  else
    if (adults > 0 && children > 0 &&(seniors === undefined || seniors === '') && (babies === undefined || babies === '')) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else
    if (adults > 0 && children > 0 && babies > 0 &&(seniors === undefined || seniors === '')) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else
    if (adults > 0 && children > 0 && babies > 0 && seniors > 0) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children           
             quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          //   text: {
          //     value: 'Jane',
          //   },
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },

          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else
    if (adults > 0 &&(children === undefined || children === '') && (babies === undefined || babies === '')  && seniors > 0 ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },

          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else 
    if (
      adults > 0 &&
      (children === undefined || children === '') &&
      (babies === undefined || babies === '') &&
      (seniors === undefined || seniors === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },

          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === undefined || adults === '') &&
      (babies === undefined || babies === '') &&
      (seniors === undefined || seniors === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === undefined || adults === '') &&
      (babies === undefined || babies === '') &&
      seniors > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: name,
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === undefined || adults === '') &&
      babies > 0 &&
      seniors > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === undefined || adults === '') &&
      babies > 0 &&
      (seniors === undefined || seniors === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },

          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === undefined || children === '') &&
      (seniors === undefined || seniors === '') &&
      (adults === undefined || adults === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === undefined || children === '') &&
      (seniors === undefined || seniors === '') &&
      adults > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === undefined || children === '') &&
      seniors > 0 &&
      adults > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === undefined || children === '') &&
      seniors > 0 &&
      adults > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      seniors > 0 &&
      (children === undefined || children === '') &&
      (adults === undefined || adults === '') &&
      (babies === undefined || babies === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      seniors > 0 &&
      (children === undefined || children === '') &&
      (adults === undefined || adults === '') &&
      babies > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      seniors > 0 &&
      (children === undefined || children === '') &&
      adults > 0 &&
      babies > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqn52LiTnoM0YggJJ8KbSJ', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    }  else if ( adults > 0 && children > 0 && seniors > 0 && babies === undefined){
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Pbqmy2LiTnoM0Yg1t75mwO9', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnB2LiTnoM0YgVG1rkJmJ', //Children
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Wednesday, Oct. 16, 2024',
                  value: '101624',
                },
                {
                  label: 'Thursday, Oct. 17, 2024',
                  value: '101724',
                },
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Oct. 18, 2024',
                  value: '101824',
                },
                {
                  label: 'Saturday, Oct. 19, 2024',
                  value: '101924',
                },
                {
                  label: 'Sunday, Oct. 20, 2024',
                  value: '102024',
                },
                {
                  label: 'Monday, Oct. 21, 2024',
                  value: '102124',
                },
                {
                  label: 'Tuesday, Oct. 22, 2024',
                  value: '102224',
                },
                {
                  label: 'Wednesday, Oct. 23, 2024',
                  value: '102324',
                },
                {
                  label: 'Thursday, Oct. 24, 2024',
                  value: '102424',
                },
                {
                  label: 'Friday, Oct. 25, 2024',
                  value: '102524',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/gatherings',
        // success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    }
    
      const session = temp
       
      console.log(session)
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


