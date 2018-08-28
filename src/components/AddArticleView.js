import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postArticleToTopic } from './api';
import { FormGroup, Label, Input, Button } from 'reactstrap';

class AddNewArticle extends Component {
  state = {
    title: '',
    body: '',
    topicId: ''
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleChangeTopic = event => {
    this.setState({
      topicId: event.target.value
    });
  };

  submitArticle = event => {
    event.preventDefault();
    let title = this.state.title;
    let body = this.state.body;
    let topicId = this.state.topicId;
    console.log(topicId);
    postArticleToTopic(topicId, title, body).then(res => {
      this.setState({
        title: '',
        body: '',
        topicId: ''
      });
    });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to={`/`}>Back</Link>
        </nav>

        <div class="row">
          <div class="col-sm" />
          <div class="col-9">
            <div className="ArticleTitle">
              <FormGroup>
                <Label for="articleTitle">Article Title</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeTitle}
                  value={this.state.title}
                />
              </FormGroup>
            </div>

            <div className="ArticleBox">
              <div>
                <FormGroup>
                  <Label for="articleBody">Article Body</Label>
                  <Input
                    rows="10"
                    type="textarea"
                    name="text"
                    id="exampleText"
                    onChange={this.handleChangeBody}
                    value={this.state.body}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="topicSelect">Topic</Label>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={this.handleChangeTopic}
                    value={this.state.topicId}
                  >
                    <option selected>Choose...</option>
                    <option value={"5b337544a291580941dcca68"}>Coding</option>
                    <option value={"5b337544a291580941dcca69"}>Football</option>
                    <option value={"5b337544a291580941dcca6a"}>Cooking</option>
                  </Input>
                </FormGroup>

                <div>
                  <Button type="submit" onClick={this.submitArticle}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default AddNewArticle;
