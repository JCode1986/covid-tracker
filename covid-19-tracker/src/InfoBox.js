import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, isRed, isGrey, active, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${
            isRed && "infoBox--red"
          } ${isGrey && "infoBox--grey"}`}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
            
                <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"} ${
                    isGrey && "infoBox_cases--grey"
                }`}>{cases}</h2>
                
                <Typography className="infoBox_total" color="textSecondary">{total}</Typography>
            </CardContent>      
        </Card>
    )
}

export default InfoBox
