const each = require('lodash/each');
const castArray = require('lodash/castArray');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');
const isEmpty = require('lodash/isEmpty');

const convertToItem = (item, handler = { property: [], list: [] }) => {
    if (isArray(item) || isPlainObject(item)) {
        each(item, (value, name) => {
            if (isArray(value)) {
                each(value, (v) => {
                    const list = { property: [], list: [], name };
                    handler.list.push(list);
                    convertToItem(v, list);
                });
                return;
            }

            const property = { value, name };
            handler.property.push(property);
        });
    }

    return handler;
};

module.exports = (queryParams, page = 0, perPage = 100) => {
    const template = {
        items: {
            item: [],
            pagenumber: null,
            itemsnumber: null,
            totalpages: null,
            totalitems: null,
            hasnext: null,
        },
    };

    const items = castArray(queryParams);

    if (!isEmpty(items)) {
        const lowPageRange = page * perPage;
        const highPageRange = (page + 1) * perPage;

        for (let i = lowPageRange; i < highPageRange; i += 1) {
            if (items[i]) {
                template.items.item.push(convertToItem(items[i]));
            }
        }
    }

    template.items.pagenumber = page;
    template.items.itemsnumber = template.items.item.length;
    template.items.totalpages = Math.ceil(items.length / perPage);
    template.items.totalitems = items.length;
    template.items.hasnext = template.items.totalpages > template.items.pagenumber + 1;

    return template;
};
