import ScrollTo from "./scroll";

export function RenderContact({ render, setRender }) {

    setRender({ ...render, showContact: !render.showContact, showAbout: false });
    ScrollTo('home');
}

export function RenderAbout({ render, setRender }) {

    setRender({ ...render, showAbout: !render.showAbout, showContact: false });
    ScrollTo('home');
}

export function RenderHome({ render, setRender }) {

    setRender({ ...render, showContact: false, showAbout: false });
    ScrollTo('home');
}