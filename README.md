# Contextual Chatbots with Tensorflow
 See [reference](https://chatbotsmagazine.com/contextual-chat-bots-with-tensorflow-4391749d0077).

Chatbot implementation with PyTorch. 



## Installation

### Create an environment

```console
mkdir py-chatbot
$ cd py-chatbot
$ conda create --name myenv
```

### Activate it

```console
. conda activate myenv
```

### Install PyTorch and dependencies

For Installation of PyTorch see [official website](https://pytorch.org/).

You also need `nltk`:
 ```console
pip install nltk
 ```

If you get an error during the first run, you also need to install `nltk.tokenize.punkt`:
Run this once in your terminal:
 ```console
$ python
>>> import nltk
>>> nltk.download('punkt')
```

## Usage
Run
```console
python train.py
```
This will dump  `data.pth` file and generate new responsing pattern.Then run
```console
python chat.py
```
To initialize the chat

