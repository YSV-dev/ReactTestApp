import React from 'react'

export default class Tab{
    private content: React.ReactNode;
    private title: string;
    private name: string; //<-ключ по которому будет открываться вкладка через ссылку

    constructor (name: string, title: string, content: React.ReactNode) {
        this.name = name;
        this.title = title;
        this.content = content;
    }

    public getName () {
        return this.name;
    }

    public getTitle () {
        return this.title;
    }

    public getContent () {
        return this.content;
    }
}
