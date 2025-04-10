function requestInit() {
    // Котельные
    const measureUnitSelect = document.querySelector('#measure-unit');

    if (measureUnitSelect) {
        const labelMeasureUnitValue = document.querySelector('.label-measure-unit');
        const subjectMeasureUnitValue = document.querySelector('.subject-measure-unit');

        if (labelMeasureUnitValue) labelMeasureUnitValue.textContent = ', ' + measureUnitSelect.value;
        if (subjectMeasureUnitValue) subjectMeasureUnitValue.textContent = ', (' + measureUnitSelect.value + ')';
    
        measureUnitSelect.addEventListener('change', () => {
            if (labelMeasureUnitValue) labelMeasureUnitValue.textContent = ', ' + measureUnitSelect.value;
            if (subjectMeasureUnitValue) subjectMeasureUnitValue.textContent = ', (' + measureUnitSelect.value + ')';
        });
    }

    // Дымовые трубы
    const quantityPipesSelect = document.querySelector('#quantity-pipes');
    const horizontalSectionsBlock = document.querySelector('.horizontal-pipe-sections-block');
    const horizontalSectionsCheck = document.querySelector('[name="checkbox-002[]"]');

    function chimneyDiameterInputDisabled(inputs, quantity) {
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];

            if (i < +quantity.value) {
                input.disabled = false;
            } else {                
                input.value = '';
                input.disabled = true;
            }
        }
    }

    if (quantityPipesSelect) {
        const chimneyDiametersInputs = document.querySelectorAll('.chimney-diameters input');
        
        chimneyDiameterInputDisabled(chimneyDiametersInputs, quantityPipesSelect);

        quantityPipesSelect.addEventListener('change', () => {
            chimneyDiameterInputDisabled(chimneyDiametersInputs, quantityPipesSelect)
        });
    }

    if (horizontalSectionsBlock && horizontalSectionsCheck.checked === false) {
        const horizontalSectionsInputs = horizontalSectionsBlock.querySelectorAll('input');
        
        horizontalSectionsBlock.classList.add('hidden');

        horizontalSectionsCheck.addEventListener('change', () => {
            horizontalSectionsBlock.classList.toggle('hidden');

            horizontalSectionsInputs.forEach(item => {
                item.value = '';
            });
        });
    }

    // Теплотехнический расчет
    const operatingModeToggle = document.querySelectorAll('.operating-mode-toggle');
    const addGasEquipmentBtn = document.querySelector('#add-gas-equipment');
    const addPremisesBtn = document.querySelector('#add-premises');

    function hideBlocks(selector, button) {
        const block = document.querySelector(selector);

        if (!block) {
            button.disabled = true;
        } else {
            button.addEventListener('click', () => {
                block.classList.remove('hidden');
                block.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });

                hideBlocks(selector, button);
            }, { once: true });
        }
    }

    if (operatingModeToggle) {
        operatingModeToggle.forEach(item => {
            if (item.value === 'Нет') {
                item.closest('.operating-mode-block').querySelector('.operating-mode-block-content').classList.add('hidden');
            }

            item.addEventListener('change', () => {
                if (item.value === 'Да') {
                    item.closest('.operating-mode-block').querySelector('.operating-mode-block-content').classList.remove('hidden');
                } else {
                    item.closest('.operating-mode-block').querySelector('.operating-mode-block-content').classList.add('hidden');
                }
            })
        });
    }

    if (addGasEquipmentBtn) {
        let gasEquipmentBlockSelector = '.gas-consuming-equipment-block.hidden';

        hideBlocks(gasEquipmentBlockSelector, addGasEquipmentBtn);
    }

    if (addPremisesBtn) {
        let premisesBlockSelector = '.premises-block.hidden';

        hideBlocks(premisesBlockSelector, addPremisesBtn);
    }
}
requestInit();

(function () {
    var wpcf7Elem = document.querySelector('.wpcf7');
    var form = document.querySelector('.wpcf7-form');
    var submitBtn = form.querySelector('.wpcf7-submit');

    // Обработчик для события отправки формы
    form.addEventListener('submit', function (event) {
        // Предотвращаем стандартное поведение формы
        event.preventDefault();

        // Отключаем кнопку отправки
        submitBtn.disabled = true;

        // Восстанавливаем кнопку при успешной отправке
        // Удаляем предыдущий обработчик, если он есть
        wpcf7Elem.removeEventListener('wpcf7submit', onWpcf7Submit);
        wpcf7Elem.addEventListener('wpcf7submit', onWpcf7Submit);
    });

    // Функция для восстановления кнопки
    function onWpcf7Submit(event) {
        submitBtn.disabled = false;
    }
})();