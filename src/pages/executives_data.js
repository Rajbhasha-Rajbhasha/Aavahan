
import Domain from "./Domain";

export const executivesList = [
        {
          id: "1",
          Name: "Raj Singh",
          Domain: "Event Management"
        },
        {
          id: "2",
          Name: "Savita Singhal",
          Domain: "Event Management"
        },
        {
          id: "3",
          Name: "Ipshita Shukla",
          Domain: "Event Management"
        },
        {
          id: "4",
          Name: "Dhanesh Kumar",
          Domain: "Event Management"
        },
        {
          id: "5",
          Name: "Abhishek Kumar Singh",
          Domain: "Event Management"
        },
        {
          id: "6",
          Name: "Amit Kumar Panchayat",
          Domain: "Documentation"
        },
        {
          id: "7",
          Name: "Ayush Kumar Mishra",
          Domain: "Documentation"
        },
        {
          id: "8",
          Name: "Sisodiya",
          Domain: "Documentation"
        },
        {
          id: "9",
          Name: "Ishita Tiwari",
          Domain: "Documentation"
        },
        {
          id: "10",
          Name: "Sanju Rohilla",
          Domain: "Web Development"
        },
        {
          id: "11",
          Name: "Shubham Thakur",
          Domain: "Web Development"
        },
        {
          id: "12",
          Name: "Rishabh Chandrakar",
          Domain: "Web Development"
        }
        ,
        {
          id: "13",
          Name: "Milind Kumawat",
          Domain: "Design"
        }
        ,
        {
          id: "14",
          Name: "Nityanand Sukla",
          Domain: "Design"
        }

      //       {
      //         id: "15",
      //         Name: "Ayush Kumar Singh",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "16",
      //         Name: "Mahika Verma",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "17",
      //         Name: "Shivam Vyas",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "18",
      //         Name: "Aadarsh Richariya",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "19",
      //         Name: "Anshu Sharma",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "20",
      //         Name: "Akash Pathak",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "21",
      //         Name: "Palak",
      //         Domain: "Sponsorship"
      //       },
      //       {
      //         id: "22",
      //         Name: "Om Prakash",
      //         Domain: "Sponsorship"
      //       },
      //           {
      //             id: "23",
      //             Name: "Ajit Kumar",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "24",
      //             Name: "Muskan Sarkar",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "25",
      //             Name: "Aditya Kaushik",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "26",
      //             Name: "Adarsh Kumar",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "27",
      //             Name: "Ninad Kasture",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "28",
      //             Name: "Sneha Kumar",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "29",
      //             Name: "Lucky Dewangan",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "30",
      //             Name: "Shivansh Satpure",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "31",
      //             Name: "Apoorva Kumar Sahu",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "32",
      //             Name: "Nihit Gupta",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "33",
      //             Name: "Udit Jha",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "34",
      //             Name: "Aviraj Meher",
      //             Domain: "Event Management"
      //           },
      //           {
      //             id: "35",
      //             Name: "Tanay Ghatge",
      //             Domain: "Event Management"
      //           },
      //           {
      //               id: "36",
      //               Name: "Aishanya Mishra",
      //               Domain: "Event Management"
      //             }, 
      //               {
      //                 id: "37",
      //                 Name: "Priyanshi Yadav",
      //                 Domain: "Design And Editing"
      //               },
      //               {
      //                 id: "38",
      //                 Name: "Diksha Mangrani",
      //                 Domain: "Design And Editing"
      //               },
      //               {
      //                 id: "39",
      //                 Name: "Prafulla Mishra",
      //                 Domain: "Design And Editing"
      //               },
      //               {
      //                 id: "40",
      //                 Name: "Ajeet Kumar",
      //                 Domain: "Design And Editing"
      //               },
      //               {
      //                 id: "41",
      //                 Name: "Akshat Jain",
      //                 Domain: "Design And Editing"
      //               },
      //               {
      //                 id: "42",
      //                 Name: "Ankit Pandey",
      //                 Domain: "Design And Editing"
      //               },
      //               {
      //                 id: "43",
      //                 Name: "Suraj Kumar Singh",
      //                 Domain: "Design And Editing"
      //               }, {
      //                   id: "44",
      //                   Name: "Ankush Jaiswal",
      //                   Domain: "Design And Editing"
      //                 },
      //                   {
      //                     id: "55",
      //                     Name: "Supriya Mishra",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "56",
      //                     Name: "Suryanshi Mishra",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "57",
      //                     Name: "Bhoomika Ahuja",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "58",
      //                     Name: "Chirag Garg",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "59",
      //                     Name: "Shruti Kotkar",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "60",
      //                     Name: "Aadarsh Singh Rajput",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "61",
      //                     Name: "Saurabh Mishra",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "62",
      //                     Name: "Anisha Sharma",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "63",
      //                     Name: "Anindita",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "64",
      //                     Name: "Md Danish Khan",
      //                     Domain: "Vigyaan"
      //                   },
      //                   {
      //                     id: "65",
      //                     Name: "Shubhi Joshi",
      //                     Domain: "Vigyaan"
      //                   },
      //                       {
      //                         id: "66",
      //                         Name: "Karan Singh",
      //                         Domain: "Tech"
      //                       },
      //                       {
      //                         id: "67",
      //                         Name: "Prabhat Sharma",
      //                         Domain: "Tech"
      //                       },
      //                       {
      //                         id: "68",
      //                         Name: "Mayank Sahu",
      //                         Domain: "Tech"
      //                       },
      //                       {
      //                         id: "69",
      //                         Name: "Nehil Sahu",
      //                         Domain: "Tech"
      //                       },
      //                       {
      //                         id: "70",
      //                         Name: "B.Deewakar Rao",
      //                         Domain: "Tech"
      //                       },
      //                       {
      //                         id: "71",
      //                         Name: "Anupam Malviya",
      //                         Domain: "Tech"
      //                       },
      //                           {
      //                             id: "72",
      //                             Name: "Shujjat Khan",
      //                             Domain: "Documentation"
      //                           },
      //                           {
      //                             id: "73",
      //                             Name: "Kailash Mistry",
      //                             Domain: "Documentation"
      //                           },
      //                           {
      //                             id: "74",
      //                             Name: "Ashish Shukla",
      //                             Domain: "Documentation"
      //                           },
      //                           {
      //                             id: "75",
      //                             Name: "Tanay Rathi",
      //                             Domain: "Documentation"
      //                           }

          
      // ]
        ]