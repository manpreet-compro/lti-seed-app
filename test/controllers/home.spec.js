const chai = require('chai');
const request = require('supertest');

const app = require('../../app');
const homeController = require('../../controllers/home.controller');

const expect = chai.expect;

describe('Home Controller', ()=>{
    describe('GET /home', ()=>{
        it('should return 200 status', ()=>{
            return request(app)
              .get('/home')
              .then((res)=>{
                  expect(res.status).equal(200);
              })
        });

        it('should render home page', ()=>{
            let request = {};
            let response = {
                viewName: "", 
                data : {},
                render: (name, data)=>{
                    output.name = name;
                    output.data = data;
                }
            };
            let output = {}

            homeController.renderHomePage(request, response);
            expect(output.name).equal("home")
        });
    });
});