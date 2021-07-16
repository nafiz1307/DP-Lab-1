interface TextConfigarator{
    modification(): any
}


class UserInput implements TextConfigarator{
    userText!: string
    constructor(userText: string){
        this.userText = userText
    }
    modification() : any{
        return this.userText
    }

    textDisplay( x : TextConfigarator) : void{
        console.log(x.modification())
    }
}

class TextModificator implements TextConfigarator{
    x : TextConfigarator;

    constructor(x:TextConfigarator){
        this.x = x;
    }

    modification(): any{
        return this.x.modification();
    }
}

class BoldTextModificator extends TextModificator{
    public modification(): string{
        return super.modification().bold()
    }
}

class StrikeThroughModificator extends TextModificator{
    public modification() : string{
        return super.modification().strike()
    }
}

class ItalicsModificator extends TextModificator{
    public modification() : string{
        return super.modification().italics()
    }
}


const testText = new UserInput('Hello World')

const boldModification = new BoldTextModificator(testText);
console.log("Modified to Bold : ")
testText.textDisplay(boldModification)

const strikeModification = new StrikeThroughModificator(testText);
console.log("Modified to Strike Through : ")
testText.textDisplay(strikeModification)

const italicModification = new ItalicsModificator(testText);
console.log("Modified to Italic : ")
testText.textDisplay(italicModification)

//for bold, italic and strikethrough

const boldStrike = new StrikeThroughModificator(boldModification)
console.log("Modified to Bold and Strike Through : ")
testText.textDisplay(boldStrike)


const boldItalicStrike = new ItalicsModificator(boldStrike)
console.log("Modified to Bold, Italics and Strike Through : ")
testText.textDisplay(boldItalicStrike)