import request from 'superagent'
// const express=require("express")
// import superagent from 'superagent'
// const router=express.Router()
// const superagent=require('superagent')

export function apiGetAllListings(cb){
    request.get(`/viewListings`)
    .end((err,res)=>{
        if(err){
            cb(err.message)
            return
        }
        console.log("in index step 1  api line 14 front"+"res"+res)
        const result=res.body
        cb(null,result)
    })
}

export function apiGetListing(id,cb){
    request.get(`/listing/${id}`)
    .end((err,res)=>{
        if(err){
            cb(err.message)
            return
        }
        const result=res.body
        cb(null,result)
    })
}

export function apiPostListing(obj,cb){
    const id=obj.user_id
    request.post(`/listings/add/${id}`)
    .send(obj)
    .end((err,res) =>{
        console.log(res,'res in index.js line 37 of api folder')
            if(err) cb(err)
            const result=res.body.listingId
            cb(null,result)
    })
}

export function apiPostBid(obj,cb){
    const userId=obj.user_id
    const listingId=obj.id
    request.post(`/listings/bid/${listingId}/${userId}`)
    .send(obj)
    .end((err , res) => {
        if(err) cb(err)
        const result=res.body.bidId
        cb(null,result)
    })
}

export function apiCheckLogin(obj,cb){
    request.post(`/login`)
    .send(obj)
    .end((err,res)=>{
        if(err) console.log("this error",err)
        const result=res.body
        console.log(res)
        cb(null,result)
    })}