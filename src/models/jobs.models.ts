import mongoose, { Document, Schema, Model } from "mongoose";


interface Job extends Document { 
  name: string; 
  category: string; 

}
d