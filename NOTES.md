# OpenAI

There are 4 model that can be used in openAI API, which is:-
- [text-davinci-003](#davinci)
- [text-curie-001](#curie)
- [text-babbage-001](#babbage)
- [text-ada-001](#ada)

There are pros and cons in using these model. The most capable model is `davinci`, but `curie` can do most of the stuffs that `davinci` can at lower price.

## Davinci
- The most capable model and can perform any task the other models can perform and with less instruction.  
- Application requiring a lot of understanding of the content, i.e: summarization for a specific audience and creative content generation, this will produce the best results.
- This cost more as the computer resources will be use more and it is not as fast as the other model.
- Understanding the intent of text. Good at solving many kinds of logic problems and explaining the motives of characters.
- **TLDR:** Good at: `Complex intent, cause and effect, summarization for audience`

## Curie
- Capable for many nuanced tasks like sentiment classification and summarization. 
- Good at answering questions and performing Q&A and as a general `service chatbot`.
- **TLDR:** Good at: `Language translation, complex classification, text sentiment, summarization`

## Babbage
- Straightforward tasks like simple classification.
- Quite capable at `Semantic Search` ranking how well documents match up with search queries.
- **TLDR:** Good at: `Moderate classification, semantic search classification`

## Ada
- The fastest model and can perform task like `parsing text, address correction and certain kinds of classification`
- Performance can often be improved by providing more context
- **TLDR:** Good at: `Parsing text, simple classification, address correction, keywords`

## Example that want to use
- [x] Q&A
- [ ] Summarize for 2nd grader
- [x] Advanced tweet classifier (sentiment analysis)
- [ ] Factual answering
- [x] Product name generator
- [ ] Extract contact information
- [ ] Analogy maker
- [ ] Friend chat
- [ ] Interview question
- [x] Chat

## Notes
Need to rewrite `https://github.com/kingofthestack/react-chat-window` in typescript. This package will be useful in the future as we need a consistent chat widget.
