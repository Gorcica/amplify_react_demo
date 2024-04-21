import React from 'react'

import Box from '@mui/material/Box';

// modules
import TicketPurchaseContent from './TicketPurchaseContent';

// styles


const ticketRates = {
    Normal: {
        OneTicket: {
            Amount: '1ticket',
            Point: '1point',
            Price: 'P$50- + tax'
        },
        TenTickets: {
            Amount: '10tickets',
            Point: '15points',
            Price: 'P$500- + tax'
        },
        Exchange: {
            Amount: '1ticket',
            Point: '-',
            Price: '20points'
        }
    },
    Gold: {
        OneTicket: {
            Amount: '1ticket',
            Point: '6point',
            Price: 'P$250- + tax'
        },
        TenTickets: {
            Amount: '10tickets',
            Point: '90points',
            Price: 'P$2,500- + tax'
        },
        Exchange: {
            Amount: '1ticket',
            Point: '-',
            Price: '100points'
        }
    },
    Premium: {
        OneTicket: {
            Amount: '1ticket',
            Point: '30point',
            Price: 'P$1,000- + tax'
        },
        TenTickets: {
            Amount: '10tickets',
            Point: '450points',
            Price: 'P$10,000- + tax'
        },
        Exchange: {
            Amount: '1ticket',
            Point: '-',
            Price: '400points'
        }
    }
};

const TicketPurchase = () => {
    console.log(ticketRates);
    return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:1 }}>
            {Object.keys(ticketRates).map((key) => (
                <TicketPurchaseContent key={key} ticketType={key} ticketInfo={ticketRates[key]} />
            ))}
        </Box>    
    )
};

export default TicketPurchase;