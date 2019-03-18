import TreeWidget from '../src/treeWidget';

const rootParent: any = null;
const structures = {
    'oblast': {
        'name': 'oblast',
        'label': 'oblast',
        'parent': rootParent,
        'config': {
            'useModalEdit': true,
            'addLineText': 'Přidat oblast',
        },
        'items': {
            'pk': { 'name': 'pk', 'type': 'text', 'isHidden': true },
            'nazev': { 'name': 'nazev', 'type': 'text', 'label': 'Nazev' },
            'popis': { 'name': 'popis', 'type': 'text', 'label': 'Popis' }
        }
    },
    'kategorie': {
        'name': 'kategorie',
        'label': 'kategorie',
        'parent': 'oblast',
        'config': {
            'addLineText': 'Přidat kategorii',
            'useModalEdit': true,
        },
        'items': {
            'pk': { 'name': 'pk', 'type': 'text', 'isHidden': true },
            'nazev': { 'name': 'nazev', 'type': 'text', 'label': 'Nazev' },
            'popis': { 'name': 'popis', 'type': 'text', 'label': 'Popis' }
        }
    },
    'otazka': {
        'name': 'otazka',
        'label': 'otázka',
        'parent': 'kategorie',
        'config': {
            'moveLineUrl': 'http://localhost:3000/api/move',
            'deleteUrl': 'http://localhost:3000/api/delete',
            'addUrl': 'http://localhost:3000/api/add',
            'addLineText': 'Přidat otázku',
            'useModalEdit': true,
            'isSortable': true,
            'canEdit': true,
            'sortFunction': (dataA: any, dataB: any) =>
            {
                const itemA = dataA.item;
                const itemB = dataB.item;
                if (itemA.druh && itemB.druh) {
                    if (itemA.druh > itemB.druh) {
                        return 1;
                    }
                    if (itemA.druh < itemB.druh) {
                        return -1;
                    }
                }

                return 0;
            },
        },
        'items': {
            'pk': { 'name': 'pk', 'type': 'text', 'isHidden': true },
            'nazev': { 'name': 'nazev', 'type': 'text', 'label': 'Otázka' },
            'druh': {
                'name': 'druh',
                'type': 'select',
                'label': 'Druh otázky',
                'value': 'skala',
                'options': {
                    'skala': { 'key': 'skala', 'value': 'Otazka na skale' },
                    'text': { 'key': 'text', 'value': 'Volny text' }
                }
            },
            'dulezitost': {
                'name': 'dulezitost',
                'type': 'select',
                'label': 'Dulezitost',
                'value': 'ano',
                'options': {
                    'ano': { 'key': 'ano', 'value': 'Ano' },
                    'ne': { 'key': 'ne', 'value': 'Ne' }
                }
            }
        }
    }
};

describe('treeWidget', () =>
{
    it('creates treewidget', () =>
    {
        const id = 'wrapper';
        const parent = document.createElement('div');
        parent.id = id;
    });
});