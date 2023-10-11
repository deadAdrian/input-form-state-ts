# Vue form project with typescript

This project was made to get a better understanding about TypeScript in Vue framework and also explore some libraries that make working with forms easier.

## Tools used in this project

* Vuetify
* Vuelidate
* Vue-the-mask
* Vue currency input

<b>Vuetify</b> was used as a component library, from where i used the main components in this project.<br>
<b>Vuelidate</b> is a validation library, that makes your life easier (once you understand how it works) validating your form data, it comes with pre-made rules such as how a input email should be to be valid so you don't have to.<Br>
<b>Vue-the-mask</b> is, as the name suggests, a mask library, that formats your input as you wish, placing special characters in the correct spots, saving your time from treating such thing.<br>
<b>Vue currency input</b> is a input component that i used from outside vuetify, because of the personalization with number inputs that you can get with it.

## How it works

It's a pretty simple project, but with some catches. Basically i'm using Pinia to handle the state of the input fields and that is pretty much of it. The most catchy part was the CEP field, because of its real-time api validation.

## Output

What i got from this project was a better understanding of TypeScript with, not only Vue, but JS/TS libraries in general, the whole type hunting thing was very challenging but as the project progressed i got used to it.

## Requirements

If you want to run the project, you will need:

* NodeJS
* asdf (recommended)
* Yarn

After cloning it:

```bash
cd input-form-state-ts
```

```bash
# if you have asdf
asdf install

#if you don´t you gonna have to install NodeJS and Yarn if you already don't have 
```

```bash
yarn
```

```bash
yarn dev
```