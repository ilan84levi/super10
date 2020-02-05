(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-module"],{

/***/ "./node_modules/@angular/material/esm5/chips.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/chips.es5.js ***!
  \**********************************************************/
/*! exports provided: MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event object emitted by MatChip when selected or deselected.
 */
var  /**
 * Event object emitted by MatChip when selected or deselected.
 */
MatChipSelectionChange = /** @class */ (function () {
    function MatChipSelectionChange(source, selected, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
    return MatChipSelectionChange;
}());
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
MatChipBase = /** @class */ (function () {
    function MatChipBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatChipBase;
}());
/** @type {?} */
var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatChipBase)), 'primary');
/**
 * Dummy directive to add CSS class to chip avatar.
 * \@docs-private
 */
var MatChipAvatar = /** @class */ (function () {
    function MatChipAvatar() {
    }
    MatChipAvatar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-chip-avatar, [matChipAvatar]',
                    host: { 'class': 'mat-chip-avatar' }
                },] },
    ];
    return MatChipAvatar;
}());
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * \@docs-private
 */
var MatChipTrailingIcon = /** @class */ (function () {
    function MatChipTrailingIcon() {
    }
    MatChipTrailingIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                    host: { 'class': 'mat-chip-trailing-icon' }
                },] },
    ];
    return MatChipTrailingIcon;
}());
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
var MatChip = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatChip, _super);
    function MatChip(_elementRef, _ngZone, platform, globalRippleOptions) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        /**
         * Whether the chip has focus.
         */
        _this._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */
        _this.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */
        _this._chipListMultiple = false;
        _this._selected = false;
        _this._selectable = true;
        _this._removable = true;
        /**
         * Emits when the chip is focused.
         */
        _this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emits when the chip is blured.
         */
        _this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */
        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */
        _this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */
        _this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        _this._addHostClassName();
        _this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_this, _ngZone, _elementRef, platform);
        _this._chipRipple.setupTriggerEvents(_elementRef.nativeElement);
        _this.rippleConfig = globalRippleOptions || {};
        return _this;
    }
    Object.defineProperty(MatChip.prototype, "rippleDisabled", {
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */
        get: /**
         * Whether ripples are disabled on interaction
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "selected", {
        /** Whether the chip is selected. */
        get: /**
         * Whether the chip is selected.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (coercedValue !== this._selected) {
                this._selected = coercedValue;
                this._dispatchSelectionChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "value", {
        /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
        get: /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */
        function () {
            return this._value != undefined
                ? this._value
                : this._elementRef.nativeElement.textContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._value = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "selectable", {
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         */
        get: /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         * @return {?}
         */
        function () { return this._selectable && this.chipListSelectable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "removable", {
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         */
        get: /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */
        function () { return this._removable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "ariaSelected", {
        /** The ARIA selected applied to the chip. */
        get: /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */
        function () {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ?
                this.selected.toString() : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChip.prototype._addHostClassName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var basicChipAttrName = 'mat-basic-chip';
        /** @type {?} */
        var element = (/** @type {?} */ (this._elementRef.nativeElement));
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    };
    /**
     * @return {?}
     */
    MatChip.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    };
    /** Selects the chip. */
    /**
     * Selects the chip.
     * @return {?}
     */
    MatChip.prototype.select = /**
     * Selects the chip.
     * @return {?}
     */
    function () {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
        }
    };
    /** Deselects the chip. */
    /**
     * Deselects the chip.
     * @return {?}
     */
    MatChip.prototype.deselect = /**
     * Deselects the chip.
     * @return {?}
     */
    function () {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
        }
    };
    /** Select this chip and emit selected event */
    /**
     * Select this chip and emit selected event
     * @return {?}
     */
    MatChip.prototype.selectViaInteraction = /**
     * Select this chip and emit selected event
     * @return {?}
     */
    function () {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
        }
    };
    /** Toggles the current selected state of this chip. */
    /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChip.prototype.toggleSelected = /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        return this.selected;
    };
    /** Allows for programmatic focusing of the chip. */
    /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    MatChip.prototype.focus = /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    function () {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    };
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    MatChip.prototype.remove = /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    function () {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    };
    /** Handles click events on the chip. */
    /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    MatChip.prototype._handleClick = /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    };
    /** Handle custom key presses. */
    /**
     * Handle custom key presses.
     * @param {?} event
     * @return {?}
     */
    MatChip.prototype._handleKeydown = /**
     * Handle custom key presses.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    };
    /**
     * @return {?}
     */
    MatChip.prototype._blur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this._hasFocus = false;
                _this._onBlur.next({ chip: _this });
            }));
        }));
    };
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChip.prototype._dispatchSelectionChange = /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this._selected
        });
    };
    MatChip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
                    inputs: ['color', 'disabled', 'disableRipple'],
                    exportAs: 'matChip',
                    host: {
                        'class': 'mat-chip',
                        '[attr.tabindex]': 'disabled ? null : -1',
                        'role': 'option',
                        '[class.mat-chip-selected]': 'selected',
                        '[class.mat-chip-with-avatar]': 'avatar',
                        '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                        '[class.mat-chip-disabled]': 'disabled',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-selected]': 'ariaSelected',
                        '(click)': '_handleClick($event)',
                        '(keydown)': '_handleKeydown($event)',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                    },
                },] },
    ];
    /** @nocollapse */
    MatChip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] }
    ]; };
    MatChip.propDecorators = {
        avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatChipAvatar, { static: false },] }],
        trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatChipTrailingIcon, { static: false },] }],
        removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return MatChipRemove; })), { static: false },] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return MatChip;
}(_MatChipMixinBase));
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
var MatChipRemove = /** @class */ (function () {
    function MatChipRemove(_parentChip) {
        this._parentChip = _parentChip;
    }
    /** Calls the parent chip's public `remove()` method if applicable. */
    /**
     * Calls the parent chip's public `remove()` method if applicable.
     * @param {?} event
     * @return {?}
     */
    MatChipRemove.prototype._handleClick = /**
     * Calls the parent chip's public `remove()` method if applicable.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    };
    MatChipRemove.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[matChipRemove]',
                    host: {
                        'class': 'mat-chip-remove mat-chip-trailing-icon',
                        '(click)': '_handleClick($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipRemove.ctorParameters = function () { return [
        { type: MatChip }
    ]; };
    return MatChipRemove;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for the chips module.
 * @type {?}
 */
var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-chips-default-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
MatChipListBase = /** @class */ (function () {
    function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatChipListBase;
}());
/** @type {?} */
var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
/** @type {?} */
var nextUniqueId = 0;
/**
 * Change event object that is emitted when the chip list value has changed.
 */
var  /**
 * Change event object that is emitted when the chip list value has changed.
 */
MatChipListChange = /** @class */ (function () {
    function MatChipListChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatChipListChange;
}());
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
var MatChipList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatChipList, _super);
    function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        _this._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */
        _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Uid of the chip list
         */
        _this._uid = "mat-chip-list-" + nextUniqueId++;
        /**
         * Tab index for the chip list.
         */
        _this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        _this._userTabIndex = null;
        /**
         * Function when touched
         */
        _this._onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Function when changed
         */
        _this._onChange = (/**
         * @return {?}
         */
        function () { });
        _this._multiple = false;
        _this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        _this._required = false;
        _this._disabled = false;
        /**
         * Orientation of the chip list.
         */
        _this.ariaOrientation = 'horizontal';
        _this._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (_this.ngControl) {
            _this.ngControl.valueAccessor = _this;
        }
        return _this;
    }
    Object.defineProperty(MatChipList.prototype, "selected", {
        /** The array of selected chips inside chip list. */
        get: /**
         * The array of selected chips inside chip list.
         * @return {?}
         */
        function () {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "role", {
        /** The ARIA role applied to the chip list. */
        get: /**
         * The ARIA role applied to the chip list.
         * @return {?}
         */
        function () { return this.empty ? null : 'listbox'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "multiple", {
        /** Whether the user should be allowed to select multiple chips. */
        get: /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._syncChipsState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "compareWith", {
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         */
        get: /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._compareWith = fn;
            if (this._selectionModel) {
                // A different comparator means the selection could change.
                this._initializeSelection();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "value", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.writeValue(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "id", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._chipInput ? this._chipInput.id : this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "required", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "placeholder", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "focused", {
        /** Whether any chips or the matChipInput inside of this chip-list has focus. */
        get: /**
         * Whether any chips or the matChipInput inside of this chip-list has focus.
         * @return {?}
         */
        function () {
            return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "empty", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return !this.empty || this.focused; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "disabled", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this.ngControl ? !!this.ngControl.disabled : this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._syncChipsState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "selectable", {
        /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         */
        get: /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         * @return {?}
         */
        function () { return this._selectable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (this.chips) {
                this.chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                function (chip) { return chip.chipListSelectable = _this._selectable; }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "tabIndex", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._userTabIndex = value;
            this._tabIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipSelectionChanges", {
        /** Combined stream of all of the child chips' selection change events. */
        get: /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.selectionChange; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipFocusChanges", {
        /** Combined stream of all of the child chips' focus change events. */
        get: /**
         * Combined stream of all of the child chips' focus change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onFocus; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipBlurChanges", {
        /** Combined stream of all of the child chips' blur change events. */
        get: /**
         * Combined stream of all of the child chips' blur change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onBlur; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipRemoveChanges", {
        /** Combined stream of all of the child chips' remove change events. */
        get: /**
         * Combined stream of all of the child chips' remove change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.destroyed; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusKeyManager"](this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) { return _this._keyManager.withHorizontalOrientation(dir); }));
        }
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._allowFocusEscape();
        }));
        // When the list changes, re-subscribe
        this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._syncChipsState();
                }));
            }
            _this._resetChips();
            // Reset chips selected/deselected status
            _this._initializeSelection();
            // Check to see if we need to update our tab index
            _this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            _this._updateFocusForDestroyedChips();
            _this.stateChanges.next();
        }));
    };
    /**
     * @return {?}
     */
    MatChipList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](this.multiple, undefined, false);
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatChipList.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    };
    /**
     * @return {?}
     */
    MatChipList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    };
    /** Associates an HTML input element with this chip list. */
    /**
     * Associates an HTML input element with this chip list.
     * @param {?} inputElement
     * @return {?}
     */
    MatChipList.prototype.registerInput = /**
     * Associates an HTML input element with this chip list.
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        this._chipInput = inputElement;
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatChipList.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) { this._ariaDescribedby = ids.join(' '); };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatChipList.prototype.writeValue = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatChipList.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatChipList.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatChipList.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    MatChipList.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    };
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     * @return {?}
     */
    MatChipList.prototype.focus = /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput();
            this.stateChanges.next();
        }
    };
    /** Attempt to focus an input if we have one. */
    /**
     * Attempt to focus an input if we have one.
     * @return {?}
     */
    MatChipList.prototype._focusInput = /**
     * Attempt to focus an input if we have one.
     * @return {?}
     */
    function () {
        if (this._chipInput) {
            this._chipInput.focus();
        }
    };
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    /**
     * Pass events to the keyboard manager. Available here for tests.
     * @param {?} event
     * @return {?}
     */
    MatChipList.prototype._keydown = /**
     * Pass events to the keyboard manager. Available here for tests.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["HOME"]) {
                this._keyManager.setFirstItemActive();
                event.preventDefault();
            }
            else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["END"]) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else {
                this._keyManager.onKeydown(event);
            }
            this.stateChanges.next();
        }
    };
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     * @protected
     * @return {?}
     */
    MatChipList.prototype._updateTabIndex = /**
     * Check the tab index as you should not be allowed to focus an empty list.
     * @protected
     * @return {?}
     */
    function () {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    };
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @protected
     * @return {?}
     */
    MatChipList.prototype._updateFocusForDestroyedChips = /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @protected
     * @return {?}
     */
    function () {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                /** @type {?} */
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    };
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    /**
     * Utility to ensure all indexes are valid.
     *
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    MatChipList.prototype._isValidIndex = /**
     * Utility to ensure all indexes are valid.
     *
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    function (index) {
        return index >= 0 && index < this.chips.length;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    MatChipList.prototype._isInputEmpty = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            var input = (/** @type {?} */ (element));
            return !input.value;
        }
        return false;
    };
    /**
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChipList.prototype._setSelectionByValue = /**
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    function (value, isUserInput) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = true; }
        this._clearSelection();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) { return chip.deselect(); }));
        if (Array.isArray(value)) {
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            function (currentValue) { return _this._selectValue(currentValue, isUserInput); }));
            this._sortValues();
        }
        else {
            /** @type {?} */
            var correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    };
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    MatChipList.prototype._selectValue = /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    function (value, isUserInput) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = true; }
        /** @type {?} */
        var correspondingChip = this.chips.find((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) {
            return chip.value != null && _this._compareWith(chip.value, value);
        }));
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._initializeSelection = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            if (_this.ngControl || _this._value) {
                _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value, false);
                _this.stateChanges.next();
            }
        }));
    };
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */
    /**
     * Deselects every chip in the list.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    MatChipList.prototype._clearSelection = /**
     * Deselects every chip in the list.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    function (skip) {
        this._selectionModel.clear();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) {
            if (chip !== skip) {
                chip.deselect();
            }
        }));
        this.stateChanges.next();
    };
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     * @private
     * @return {?}
     */
    MatChipList.prototype._sortValues = /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                if (chip.selected) {
                    _this._selectionModel.select(chip);
                }
            }));
            this.stateChanges.next();
        }
    };
    /** Emits change event to set the model value. */
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatChipList.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        /** @type {?} */
        var valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.value; }));
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    };
    /** When blurred, mark the field as touched when focus moved outside the chip list. */
    /**
     * When blurred, mark the field as touched when focus moved outside the chip list.
     * @return {?}
     */
    MatChipList.prototype._blur = /**
     * When blurred, mark the field as touched when focus moved outside the chip list.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.focused) {
                        _this._markAsTouched();
                    }
                }));
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    };
    /** Mark the field as touched */
    /**
     * Mark the field as touched
     * @return {?}
     */
    MatChipList.prototype._markAsTouched = /**
     * Mark the field as touched
     * @return {?}
     */
    function () {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    };
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    MatChipList.prototype._allowFocusEscape = /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._tabIndex = _this._userTabIndex || 0;
                _this._changeDetectorRef.markForCheck();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._resetChips = /**
     * @private
     * @return {?}
     */
    function () {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._dropSubscriptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    };
    /** Listens to user-generated selection events on each chip. */
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    MatChipList.prototype._listenToChipsSelection = /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.source.selected
                ? _this._selectionModel.select(event.source)
                : _this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!_this.multiple) {
                _this.chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                function (chip) {
                    if (!_this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                }));
            }
            if (event.isUserInput) {
                _this._propagateChanges();
            }
        }));
    };
    /** Listens to user-generated selection events on each chip. */
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    MatChipList.prototype._listenToChipsFocus = /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chipIndex = _this.chips.toArray().indexOf(event.chip);
            if (_this._isValidIndex(chipIndex)) {
                _this._keyManager.updateActiveItemIndex(chipIndex);
            }
            _this.stateChanges.next();
        }));
        this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this._blur();
            _this.stateChanges.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._listenToChipsRemoved = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chip = event.chip;
            /** @type {?} */
            var chipIndex = _this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (_this._isValidIndex(chipIndex) && chip._hasFocus) {
                _this._lastDestroyedChipIndex = chipIndex;
            }
        }));
    };
    /** Checks whether an event comes from inside a chip element. */
    /**
     * Checks whether an event comes from inside a chip element.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatChipList.prototype._originatesFromChip = /**
     * Checks whether an event comes from inside a chip element.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var currentElement = (/** @type {?} */ (event.target));
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    };
    /** Checks whether any of the chips is focused. */
    /**
     * Checks whether any of the chips is focused.
     * @private
     * @return {?}
     */
    MatChipList.prototype._hasFocusedChip = /**
     * Checks whether any of the chips is focused.
     * @private
     * @return {?}
     */
    function () {
        return this.chips.some((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) { return chip._hasFocus; }));
    };
    /** Syncs the list's state with the individual chips. */
    /**
     * Syncs the list's state with the individual chips.
     * @private
     * @return {?}
     */
    MatChipList.prototype._syncChipsState = /**
     * Syncs the list's state with the individual chips.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chips) {
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                chip.disabled = _this._disabled;
                chip._chipListMultiple = _this.multiple;
            }));
        }
    };
    MatChipList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-chip-list',
                    template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
                    exportAs: 'matChipList',
                    host: {
                        '[attr.tabindex]': 'disabled ? null : _tabIndex',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.role]': 'role',
                        '[class.mat-chip-list-disabled]': 'disabled',
                        '[class.mat-chip-list-invalid]': 'errorState',
                        '[class.mat-chip-list-required]': 'required',
                        '[attr.aria-orientation]': 'ariaOrientation',
                        'class': 'mat-chip-list',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                        '(keydown)': '_keydown($event)',
                        '[id]': '_uid',
                    },
                    providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldControl"], useExisting: MatChipList }],
                    styles: [".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatChipList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"] }] }
    ]; };
    MatChipList.propDecorators = {
        errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-orientation',] }],
        selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatChip, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return MatChipList;
}(_MatChipListMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids.
/** @type {?} */
var nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
var MatChipInput = /** @class */ (function () {
    function MatChipInput(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */
        this.placeholder = '';
        /**
         * Unique id for the input.
         */
        this.id = "mat-chip-list-input-" + nextUniqueId$1++;
        this._disabled = false;
        this._inputElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    Object.defineProperty(MatChipInput.prototype, "chipList", {
        /** Register input for chip list */
        set: /**
         * Register input for chip list
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._chipList = value;
                this._chipList.registerInput(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "addOnBlur", {
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         */
        get: /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */
        function () { return this._addOnBlur; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "disabled", {
        /** Whether the input is disabled. */
        get: /**
         * Whether the input is disabled.
         * @return {?}
         */
        function () { return this._disabled || (this._chipList && this._chipList.disabled); },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "empty", {
        /** Whether the input is empty. */
        get: /**
         * Whether the input is empty.
         * @return {?}
         */
        function () { return !this._inputElement.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipInput.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._chipList.stateChanges.next();
    };
    /** Utility method to make host definition/tests more clear. */
    /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    MatChipInput.prototype._keydown = /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    };
    /** Checks to see if the blur should emit the (chipEnd) event. */
    /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    MatChipInput.prototype._blur = /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    function () {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatChipInput.prototype._focus = /**
     * @return {?}
     */
    function () {
        this.focused = true;
        this._chipList.stateChanges.next();
    };
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    MatChipInput.prototype._emitChipEnd = /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    MatChipInput.prototype._onInput = /**
     * @return {?}
     */
    function () {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    MatChipInput.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () {
        this._inputElement.focus();
    };
    /** Checks whether a keycode is one of the configured separators. */
    /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatChipInput.prototype._isSeparatorKey = /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
            return false;
        }
        /** @type {?} */
        var separators = this.separatorKeyCodes;
        /** @type {?} */
        var keyCode = event.keyCode;
        return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
    };
    MatChipInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'input[matChipInputFor]',
                    exportAs: 'matChipInput, matChipInputFor',
                    host: {
                        'class': 'mat-chip-input mat-input-element',
                        '(keydown)': '_keydown($event)',
                        '(blur)': '_blur()',
                        '(focus)': '_focus()',
                        '(input)': '_onInput()',
                        '[id]': 'id',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.placeholder]': 'placeholder || null',
                        '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
    ]; };
    MatChipInput.propDecorators = {
        chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputFor',] }],
        addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputAddOnBlur',] }],
        separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputSeparatorKeyCodes',] }],
        chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['matChipInputTokenEnd',] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return MatChipInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
var ɵ0 = ({
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"]]
});
var MatChipsModule = /** @class */ (function () {
    function MatChipsModule() {
    }
    MatChipsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    exports: CHIP_DECLARATIONS,
                    declarations: CHIP_DECLARATIONS,
                    providers: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
                        {
                            provide: MAT_CHIPS_DEFAULT_OPTIONS,
                            useValue: (/** @type {?} */ (ɵ0))
                        }
                    ]
                },] },
    ];
    return MatChipsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=chips.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/menu.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/menu.es5.js ***!
  \*********************************************************/
/*! exports provided: MatMenu, MAT_MENU_DEFAULT_OPTIONS, _MatMenu, _MatMenuBase, MatMenuItem, MatMenuTrigger, MAT_MENU_SCROLL_STRATEGY, MAT_MENU_PANEL, _MatMenuDirectivesModule, MatMenuModule, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, ɵa24, ɵb24, ɵc24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenu", function() { return MatMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function() { return MAT_MENU_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatMenu", function() { return _MatMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function() { return _MatMenuBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuItem", function() { return MatMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function() { return MatMenuTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function() { return MAT_MENU_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function() { return MAT_MENU_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function() { return _MatMenuDirectivesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule", function() { return MatMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function() { return matMenuAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInItems", function() { return fadeInItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMenu", function() { return transformMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuContent", function() { return MatMenuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa24", function() { return MAT_MENU_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb24", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc24", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * \@docs-private
 * @type {?}
 */
var matMenuAnimations = {
    /**
     * This animation controls the menu panel's entry and exit from the page.
     *
     * When the menu panel is added to the DOM, it scales in and fades in its border.
     *
     * When the menu panel is removed from the DOM, it simply fades out after a brief
     * delay to display the ripple.
     */
    transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformMenu', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.mat-menu-content, .mat-mdc-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1
            }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })),
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and content of the menu panel
     * after its containing element is scaled in.
     */
    fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var transformMenu = matMenuAnimations.transformMenu;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
var MatMenuContent = /** @class */ (function () {
    function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        /**
         * Emits when the menu content has been attached.
         */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    MatMenuContent.prototype.attach = /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        if (context === void 0) { context = {}; }
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        /** @type {?} */
        var element = this._template.elementRef.nativeElement;
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        (/** @type {?} */ (element.parentNode)).insertBefore(this._outlet.outletElement, element);
        this._portal.attach(this._outlet, context);
        this._attached.next();
    };
    /**
     * Detaches the content.
     * @docs-private
     */
    /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    MatMenuContent.prototype.detach = /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    };
    /**
     * @return {?}
     */
    MatMenuContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._outlet) {
            this._outlet.dispose();
        }
    };
    MatMenuContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'ng-template[matMenuContent]'
                },] },
    ];
    /** @nocollapse */
    MatMenuContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    return MatMenuContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * \@docs-private
 * @return {?}
 */
function throwMatMenuMissingError() {
    throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionX() {
    throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionY() {
    throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to provide the parent menu to menu-specific components.
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_MENU_PANEL');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatMenuItem.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatMenuItem.
/**
 * \@docs-private
 */
MatMenuItemBase = /** @class */ (function () {
    function MatMenuItemBase() {
    }
    return MatMenuItemBase;
}());
/** @type {?} */
var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(MatMenuItemBase));
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
var MatMenuItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MatMenuItem, _super);
    function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this = 
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._parentMenu = _parentMenu;
        /**
         * ARIA role for the menu item.
         */
        _this.role = 'menuitem';
        /**
         * Stream that emits when the menu item is hovered.
         */
        _this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Whether the menu item is highlighted.
         */
        _this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */
        _this._triggersSubmenu = false;
        if (_focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            _focusMonitor.monitor(_this._elementRef, false);
        }
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_this);
        }
        _this._document = document;
        return _this;
    }
    /** Focuses the menu item. */
    /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    MatMenuItem.prototype.focus = /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    function (origin) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin);
        }
        else {
            this._getHostElement().focus();
        }
    };
    /**
     * @return {?}
     */
    MatMenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
    };
    /** Used to set the `tabindex`. */
    /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    MatMenuItem.prototype._getTabIndex = /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    function () {
        return this.disabled ? '-1' : '0';
    };
    /** Returns the host DOM element. */
    /**
     * Returns the host DOM element.
     * @return {?}
     */
    MatMenuItem.prototype._getHostElement = /**
     * Returns the host DOM element.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatMenuItem.prototype._checkDisabled = /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * Emits to the hover stream.
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatMenuItem.prototype._handleMouseEnter = /**
     * Emits to the hover stream.
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    function () {
        this._hovered.next(this);
    };
    /** Gets the label to be used when determining whether the option should be focused. */
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MatMenuItem.prototype.getLabel = /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._elementRef.nativeElement;
        /** @type {?} */
        var textNodeType = this._document ? this._document.TEXT_NODE : 3;
        /** @type {?} */
        var output = '';
        if (element.childNodes) {
            /** @type {?} */
            var length_1 = element.childNodes.length;
            // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.
            for (var i = 0; i < length_1; i++) {
                if (element.childNodes[i].nodeType === textNodeType) {
                    output += element.childNodes[i].textContent;
                }
            }
        }
        return output.trim();
    };
    MatMenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: '[mat-menu-item]',
                    exportAs: 'matMenuItem',
                    inputs: ['disabled', 'disableRipple'],
                    host: {
                        '[attr.role]': 'role',
                        'class': 'mat-menu-item',
                        '[class.mat-menu-item-highlighted]': '_highlighted',
                        '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.disabled]': 'disabled || null',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    template: "<ng-content></ng-content><div class=\"mat-menu-ripple\" matRipple [matRippleDisabled]=\"disableRipple || disabled\" [matRippleTrigger]=\"_getHostElement()\"></div>",
                },] },
    ];
    /** @nocollapse */
    MatMenuItem.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    MatMenuItem.propDecorators = {
        role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        _checkDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }],
        _handleMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseenter',] }]
    };
    return MatMenuItem;
}(_MatMenuItemMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for `mat-menu`.
 * @type {?}
 */
var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/**
 * Start elevation for the menu panel.
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_BASE_ELEVATION = 4;
/**
 * Base class with all of the `MatMenu` functionality.
 */
// tslint:disable-next-line:class-name
var _MatMenuBase = /** @class */ (function () {
    function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Menu items inside the current menu.
         */
        this._items = [];
        /**
         * Emits whenever the amount of menu items changes.
         */
        this._itemChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to tab events on the menu panel
         */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */
        this._classList = {};
        /**
         * Current state of the panel animation.
         */
        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Class to be added to the backdrop element.
         */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */
        this.close = this.closed;
    }
    Object.defineProperty(_MatMenuBase.prototype, "xPosition", {
        /** Position of the menu in the X axis. */
        get: /**
         * Position of the menu in the X axis.
         * @return {?}
         */
        function () { return this._xPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 'before' && value !== 'after') {
                throwMatMenuInvalidPositionX();
            }
            this._xPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "yPosition", {
        /** Position of the menu in the Y axis. */
        get: /**
         * Position of the menu in the Y axis.
         * @return {?}
         */
        function () { return this._yPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 'above' && value !== 'below') {
                throwMatMenuInvalidPositionY();
            }
            this._yPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "overlapTrigger", {
        /** Whether the menu should overlap its trigger. */
        get: /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */
        function () { return this._overlapTrigger; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "hasBackdrop", {
        /** Whether the menu has a backdrop. */
        get: /**
         * Whether the menu has a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "panelClass", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */
        function (classes) {
            var _this = this;
            /** @type {?} */
            var previousPanelClass = this._previousPanelClass;
            if (previousPanelClass && previousPanelClass.length) {
                previousPanelClass.split(' ').forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) {
                    _this._classList[className] = false;
                }));
            }
            this._previousPanelClass = classes;
            if (classes && classes.length) {
                classes.split(' ').forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) {
                    _this._classList[className] = true;
                }));
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "classList", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * @breaking-change 8.0.0
         */
        get: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */
        function () { return this.panelClass; },
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) { this.panelClass = classes; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    _MatMenuBase.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPositionClasses();
    };
    /**
     * @return {?}
     */
    _MatMenuBase.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this._items).withWrap().withTypeAhead();
        this._tabSubscription = this._keyManager.tabOut.subscribe((/**
         * @return {?}
         */
        function () { return _this.closed.emit('tab'); }));
    };
    /**
     * @return {?}
     */
    _MatMenuBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tabSubscription.unsubscribe();
        this.closed.complete();
    };
    /** Stream that emits whenever the hovered menu item changes. */
    /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    _MatMenuBase.prototype._hovered = /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    function () {
        return this._itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((/**
         * @param {?} items
         * @return {?}
         */
        function (items) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"].apply(void 0, items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._hovered; }))); })));
    };
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    _MatMenuBase.prototype._handleKeydown = /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var manager = this._keyManager;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["HOME"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["END"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                    keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                    event.preventDefault();
                }
                break;
            default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"]) {
                    manager.setFocusOrigin('keyboard');
                }
                manager.onKeydown(event);
        }
    };
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    _MatMenuBase.prototype.focusFirstItem = /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        if (origin === void 0) { origin = 'program'; }
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable.asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._keyManager.setFocusOrigin(origin).setFirstItemActive(); }));
        }
        else {
            this._keyManager.setFocusOrigin(origin).setFirstItemActive();
        }
    };
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    _MatMenuBase.prototype.resetActiveItem = /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    function () {
        this._keyManager.setActiveItem(-1);
    };
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    _MatMenuBase.prototype.setElevation = /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    function (depth) {
        // The elevation starts at the base and increases by one for each level.
        /** @type {?} */
        var newElevation = "mat-elevation-z" + (MAT_MENU_BASE_ELEVATION + depth);
        /** @type {?} */
        var customElevation = Object.keys(this._classList).find((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.startsWith('mat-elevation-z'); }));
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    };
    /**
     * Registers a menu item with the menu.
     * @docs-private
     */
    /**
     * Registers a menu item with the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    _MatMenuBase.prototype.addItem = /**
     * Registers a menu item with the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // We register the items through this method, rather than picking them up through
        // `ContentChildren`, because we need the items to be picked up by their closest
        // `mat-menu` ancestor. If we used `@ContentChildren(MatMenuItem, {descendants: true})`,
        // all descendant items will bleed into the top-level menu in the case where the consumer
        // has `mat-menu` instances nested inside each other.
        if (this._items.indexOf(item) === -1) {
            this._items.push(item);
            this._itemChanges.next(this._items);
        }
    };
    /**
     * Removes an item from the menu.
     * @docs-private
     */
    /**
     * Removes an item from the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    _MatMenuBase.prototype.removeItem = /**
     * Removes an item from the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this._items.indexOf(item);
        if (this._items.indexOf(item) > -1) {
            this._items.splice(index, 1);
            this._itemChanges.next(this._items);
        }
    };
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    _MatMenuBase.prototype.setPositionClasses = /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    function (posX, posY) {
        if (posX === void 0) { posX = this.xPosition; }
        if (posY === void 0) { posY = this.yPosition; }
        /** @type {?} */
        var classes = this._classList;
        classes['mat-menu-before'] = posX === 'before';
        classes['mat-menu-after'] = posX === 'after';
        classes['mat-menu-above'] = posY === 'above';
        classes['mat-menu-below'] = posY === 'below';
    };
    /** Starts the enter animation. */
    /**
     * Starts the enter animation.
     * @return {?}
     */
    _MatMenuBase.prototype._startAnimation = /**
     * Starts the enter animation.
     * @return {?}
     */
    function () {
        // @breaking-change 8.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    };
    /** Resets the panel animation to its initial state. */
    /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    _MatMenuBase.prototype._resetAnimation = /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    function () {
        // @breaking-change 8.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    };
    /** Callback that is invoked when the panel animation completes. */
    /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    _MatMenuBase.prototype._onAnimationDone = /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationDone.next(event);
        this._isAnimating = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    _MatMenuBase.prototype._onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._isAnimating = true;
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
        // because we move focus to the first item while it's still being animated, which can throw
        // the browser off when it determines the scroll position. Alternatively we can move focus
        // when the animation is done, however moving focus asynchronously will interrupt screen
        // readers which are in the process of reading out the menu already. We take the `element`
        // from the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    };
    /** @nocollapse */
    _MatMenuBase.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
    ]; };
    _MatMenuBase.propDecorators = {
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: false },] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatMenuItem,] }],
        lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatMenuContent, { static: false },] }],
        overlapTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['class',] }],
        classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return _MatMenuBase;
}());
/**
 * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
 */
var  /**
 * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
 */
MatMenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MatMenu, _super);
    function MatMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MatMenu;
}(_MatMenuBase));
// Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
// extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
// to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
// queries and DI to work correctly, while still not referencing the actual menu class.
// Class responsibility is split up as follows:
// * _MatMenuBase - provides all the functionality without any of the Angular metadata.
// * MatMenu - keeps the same name symbol name as the current menu and
// is used as a provider for DI and query purposes.
// * _MatMenu - the actual menu component implementation with the Angular metadata that should
// be tree shaken away for MDC.
/**
 * \@docs-public MatMenu
 */
var _MatMenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(_MatMenu, _super);
    function _MatMenu(elementRef, ngZone, defaultOptions) {
        return _super.call(this, elementRef, ngZone, defaultOptions) || this;
    }
    _MatMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-menu',
                    template: "<ng-template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.start)=\"_onAnimationStart($event)\" (@transformMenu.done)=\"_onAnimationDone($event)\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-menu-content\"><ng-content></ng-content></div></div></ng-template>",
                    styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}@media (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}@media (-ms-high-contrast:active){.mat-menu-item-highlighted,.mat-menu-item.cdk-keyboard-focused,.mat-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    exportAs: 'matMenu',
                    animations: [
                        matMenuAnimations.transformMenu,
                        matMenuAnimations.fadeInItems
                    ],
                    providers: [
                        { provide: MAT_MENU_PANEL, useExisting: MatMenu },
                        { provide: MatMenu, useExisting: _MatMenu }
                    ]
                },] },
    ];
    /** @nocollapse */
    _MatMenu.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
    ]; };
    return _MatMenu;
}(MatMenu));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that determines the scroll handling while the menu is open.
 * @type {?}
 */
var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-menu-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    function () { return overlay.scrollStrategies.reposition(); });
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/**
 * Default top padding of the menu panel.
 * @type {?}
 */
var MENU_PANEL_TOP_PADDING = 8;
/**
 * Options for binding a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({ passive: true });
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/**
 * This directive is intended to be used in conjunction with an mat-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
var MatMenuTrigger = /** @class */ (function () {
    function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        var _this = this;
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = (/**
         * @return {?}
         */
        function () { return _this._openedBy = 'touch'; });
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = null;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */
        this.restoreFocus = true;
        /**
         * Event emitted when the associated menu is opened.
         */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuClose = this.menuClosed;
        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatMenuTrigger.prototype, "_deprecatedMatMenuTriggerFor", {
        /**
         * @deprecated
         * @breaking-change 8.0.0
         */
        get: /**
         * @deprecated
         * \@breaking-change 8.0.0
         * @return {?}
         */
        function () { return this.menu; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "menu", {
        /** References the menu instance that the trigger is associated with. */
        get: /**
         * References the menu instance that the trigger is associated with.
         * @return {?}
         */
        function () { return this._menu; },
        set: /**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            var _this = this;
            if (menu === this._menu) {
                return;
            }
            this._menu = menu;
            this._menuCloseSubscription.unsubscribe();
            if (menu) {
                this._menuCloseSubscription = menu.close.asObservable().subscribe((/**
                 * @param {?} reason
                 * @return {?}
                 */
                function (reason) {
                    _this._destroyMenu();
                    // If a click closed the menu, we should close the entire chain of nested menus.
                    if ((reason === 'click' || reason === 'tab') && _this._parentMenu) {
                        _this._parentMenu.closed.emit(reason);
                    }
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._checkMenu();
        this._handleHover();
    };
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        this._menuCloseSubscription.unsubscribe();
        this._closingActionsSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    };
    Object.defineProperty(MatMenuTrigger.prototype, "menuOpen", {
        /** Whether the menu is open. */
        get: /**
         * Whether the menu is open.
         * @return {?}
         */
        function () {
            return this._menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "dir", {
        /** The text direction of the containing app. */
        get: /**
         * The text direction of the containing app.
         * @return {?}
         */
        function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the menu triggers a sub-menu or a top-level one. */
    /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    MatMenuTrigger.prototype.triggersSubmenu = /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    function () {
        return !!(this._menuItemInstance && this._parentMenu);
    };
    /** Toggles the menu between the open and closed states. */
    /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    MatMenuTrigger.prototype.toggleMenu = /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    function () {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    };
    /** Opens the menu. */
    /**
     * Opens the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.openMenu = /**
     * Opens the menu.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        /** @type {?} */
        var overlayRef = this._createOverlay();
        /** @type {?} */
        var overlayConfig = overlayRef.getConfig();
        this._setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
        overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() :
            this.menu.hasBackdrop;
        overlayRef.attach(this._getPortal());
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe((/**
         * @return {?}
         */
        function () { return _this.closeMenu(); }));
        this._initMenu();
        if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
        }
    };
    /** Closes the menu. */
    /**
     * Closes the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.closeMenu = /**
     * Closes the menu.
     * @return {?}
     */
    function () {
        this.menu.close.emit();
    };
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    MatMenuTrigger.prototype.focus = /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    function (origin) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin);
        }
        else {
            this._element.nativeElement.focus();
        }
    };
    /** Closes the menu and does the necessary cleanup. */
    /**
     * Closes the menu and does the necessary cleanup.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._destroyMenu = /**
     * Closes the menu and does the necessary cleanup.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        /** @type {?} */
        var menu = this.menu;
        this._closingActionsSubscription.unsubscribe();
        this._overlayRef.detach();
        if (menu instanceof MatMenu) {
            menu._resetAnimation();
            if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return event.toState === 'void'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), 
                // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(menu.lazyContent._attached))
                    .subscribe({
                    next: (/**
                     * @return {?}
                     */
                    function () { return (/** @type {?} */ (menu.lazyContent)).detach(); }),
                    // No matter whether the content got re-attached, reset the menu.
                    complete: (/**
                     * @return {?}
                     */
                    function () { return _this._resetMenu(); })
                });
            }
            else {
                this._resetMenu();
            }
        }
        else {
            this._resetMenu();
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
    };
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._initMenu = /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    function () {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this._setIsMenuOpen(true);
        this.menu.focusFirstItem(this._openedBy || 'program');
    };
    /** Updates the menu elevation based on the amount of parent menus that it has. */
    /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._setMenuElevation = /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @private
     * @return {?}
     */
    function () {
        if (this.menu.setElevation) {
            /** @type {?} */
            var depth = 0;
            /** @type {?} */
            var parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    };
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     */
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._resetMenu = /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    function () {
        this._setIsMenuOpen(false);
        // We should reset focus if the user is navigating using a keyboard or
        // if we have a top-level trigger which might cause focus to be lost
        // when clicking on the backdrop.
        if (this.restoreFocus) {
            if (!this._openedBy) {
                // Note that the focus style will show up both for `program` and
                // `keyboard` so we don't have to specify which one it is.
                this.focus();
            }
            else if (!this.triggersSubmenu()) {
                this.focus(this._openedBy);
            }
        }
        this._openedBy = null;
    };
    // set state rather than toggle to support triggers sharing a menu
    // set state rather than toggle to support triggers sharing a menu
    /**
     * @private
     * @param {?} isOpen
     * @return {?}
     */
    MatMenuTrigger.prototype._setIsMenuOpen = 
    // set state rather than toggle to support triggers sharing a menu
    /**
     * @private
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    };
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     */
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._checkMenu = /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @private
     * @return {?}
     */
    function () {
        if (!this.menu) {
            throwMatMenuMissingError();
        }
    };
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._createOverlay = /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @private
     * @return {?}
     */
    function () {
        if (!this._overlayRef) {
            /** @type {?} */
            var config = this._getOverlayConfig();
            this._subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            this._overlayRef = this._overlay.create(config);
            // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.
            this._overlayRef.keydownEvents().subscribe();
        }
        return this._overlayRef;
    };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayConfig
     */
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @private
     * @return {?} OverlayConfig
     */
    MatMenuTrigger.prototype._getOverlayConfig = /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @private
     * @return {?} OverlayConfig
     */
    function () {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayConfig"]({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    };
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @private
     * @param {?} position
     * @return {?}
     */
    MatMenuTrigger.prototype._subscribeToPositions = /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                /** @type {?} */
                var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                /** @type {?} */
                var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
                (/** @type {?} */ (_this.menu.setPositionClasses))(posX, posY);
            }));
        }
    };
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @private
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    MatMenuTrigger.prototype._setPosition = /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @private
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    function (positionStrategy) {
        var _a = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], originX = _a[0], originFallbackX = _a[1];
        var _b = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = [overlayY, overlayFallbackY], originY = _c[0], originFallbackY = _c[1];
        var _d = [originX, originFallbackX], overlayX = _d[0], overlayFallbackX = _d[1];
        /** @type {?} */
        var offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX: originX, originY: originY, overlayX: overlayX, overlayY: overlayY, offsetY: offsetY },
            { originX: originFallbackX, originY: originY, overlayX: overlayFallbackX, overlayY: overlayY, offsetY: offsetY },
            {
                originX: originX,
                originY: originFallbackY,
                overlayX: overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    };
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._menuClosingActions = /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var backdrop = (/** @type {?} */ (this._overlayRef)).backdropClick();
        /** @type {?} */
        var detachments = (/** @type {?} */ (this._overlayRef)).detachments();
        /** @type {?} */
        var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
        /** @type {?} */
        var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @param {?} active
         * @return {?}
         */
        function (active) { return active !== _this._menuItemInstance; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @return {?}
         */
        function () { return _this._menuOpen; }))) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
    };
    /** Handles mouse presses on the trigger. */
    /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleMousedown = /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : null;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    };
    /** Handles key presses on the trigger. */
    /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleKeydown = /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"] && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"] && this.dir === 'rtl'))) {
            this.openMenu();
        }
    };
    /** Handles click events on the trigger. */
    /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleClick = /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    };
    /** Handles the cases where the user hovers over the trigger. */
    /**
     * Handles the cases where the user hovers over the trigger.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._handleHover = /**
     * Handles the cases where the user hovers over the trigger.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu()) {
            return;
        }
        this._hoverSubscription = this._parentMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @param {?} active
         * @return {?}
         */
        function (active) { return active === _this._menuItemInstance && !active.disabled; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._openedBy = 'mouse';
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (_this.menu instanceof MatMenu && _this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                _this.menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this._parentMenu._hovered()))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.openMenu(); }));
            }
            else {
                _this.openMenu();
            }
        }));
    };
    /** Gets the portal that should be attached to the overlay. */
    /**
     * Gets the portal that should be attached to the overlay.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._getPortal = /**
     * Gets the portal that should be attached to the overlay.
     * @private
     * @return {?}
     */
    function () {
        // Note that we can avoid this check by keeping the portal on the menu panel.
        // While it would be cleaner, we'd have to introduce another required method on
        // `MatMenuPanel`, making it harder to consume.
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    };
    MatMenuTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
                    host: {
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'menuOpen || null',
                        '(mousedown)': '_handleMousedown($event)',
                        '(keydown)': '_handleKeydown($event)',
                        '(click)': '_handleClick($event)',
                    },
                    exportAs: 'matMenuTrigger'
                },] },
    ];
    /** @nocollapse */
    MatMenuTrigger.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_MENU_SCROLL_STRATEGY,] }] },
        { type: MatMenu, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: MatMenuItem, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
    ]; };
    MatMenuTrigger.propDecorators = {
        _deprecatedMatMenuTriggerFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-menu-trigger-for',] }],
        menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matMenuTriggerFor',] }],
        menuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matMenuTriggerData',] }],
        restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matMenuTriggerRestoreFocus',] }],
        menuOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onMenuOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        menuClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onMenuClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return MatMenuTrigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
var _MatMenuDirectivesModule = /** @class */ (function () {
    function _MatMenuDirectivesModule() {
    }
    _MatMenuDirectivesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    declarations: [MatMenuTrigger, MatMenuContent],
                    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
                },] },
    ];
    return _MatMenuDirectivesModule;
}());
var MatMenuModule = /** @class */ (function () {
    function MatMenuModule() {
    }
    MatMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"],
                        _MatMenuDirectivesModule,
                    ],
                    exports: [_MatMenu, MatMenuItem, _MatMenuDirectivesModule],
                    declarations: [_MatMenu, MatMenuItem],
                    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
                },] },
    ];
    return MatMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=menu.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/sidenav.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/sidenav.es5.js ***!
  \************************************************************/
/*! exports provided: MatSidenavModule, throwMatDuplicatedDrawerError, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, matDrawerAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function() { return MatSidenavModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function() { return throwMatDuplicatedDrawerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function() { return MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function() { return MAT_DRAWER_DEFAULT_AUTOSIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function() { return MatDrawerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDrawer", function() { return MatDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function() { return MatDrawerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function() { return MatSidenavContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenav", function() { return MatSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function() { return MatSidenavContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function() { return matDrawerAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material drawers.
 * \@docs-private
 * @type {?}
 */
var matDrawerAnimations = {
    /**
     * Animation that slides a drawer in and out.
     */
    transformDrawer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transform', [
        // We remove the `transform` here completely, rather than setting it to zero, because:
        // 1. Having a transform can cause elements with ripples or an animated
        //    transform to shift around in Chrome with an RTL layout (see #10023).
        // 2. 3d transforms causes text to appear blurry on IE and Edge.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'transform': 'none',
            'visibility': 'visible',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // Avoids the shadow showing up when closed in SSR.
            'box-shadow': 'none',
            'visibility': 'hidden',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throws an exception when two MatDrawer are matching the same position.
 * \@docs-private
 * @param {?} position
 * @return {?}
 */
function throwMatDuplicatedDrawerError(position) {
    throw Error("A drawer was already declared for 'position=\"" + position + "\"'");
}
/**
 * Configures whether drawers should use auto sizing by default.
 * @type {?}
 */
var MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('MAT_DRAWER_DEFAULT_AUTOSIZE', {
    providedIn: 'root',
    factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
    return false;
}
var MatDrawerContent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatDrawerContent, _super);
    function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._container = _container;
        return _this;
    }
    /**
     * @return {?}
     */
    MatDrawerContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._container._contentMarginChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
    };
    MatDrawerContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-drawer-content',
                    template: '<ng-content></ng-content>',
                    host: {
                        'class': 'mat-drawer-content',
                        '[style.margin-left.px]': '_container._contentMargins.left',
                        '[style.margin-right.px]': '_container._contentMargins.right',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatDrawerContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] },
        { type: MatDrawerContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return MatDrawerContainer; })),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"] }
    ]; };
    return MatDrawerContent;
}(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollable"]));
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */
var MatDrawer = /** @class */ (function () {
    function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._focusMonitor = _focusMonitor;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._doc = _doc;
        this._elementFocusedBeforeDrawerWasOpened = null;
        /**
         * Whether the drawer is initialized. Used for disabling the initial animation.
         */
        this._enableAnimations = false;
        this._position = 'start';
        this._mode = 'over';
        this._disableClose = false;
        this._autoFocus = true;
        /**
         * Emits whenever the drawer has started animating.
         */
        this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Emits whenever the drawer is done animating.
         */
        this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Current state of the sidenav animation.
         */
        // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
        // metadata is not inherited by child classes, instead the host binding data is defined in a way
        // that can be inherited.
        // tslint:disable:no-host-decorator-in-concrete
        this._animationState = 'void';
        /**
         * Event emitted when the drawer open state is changed.
         */
        this.openedChange = 
        // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](/* isAsync */ true);
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Event emitted when the drawer's position changes.
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        /**
         * An observable that emits when the drawer mode changes. This is used by the drawer container to
         * to know when to when the mode changes so it can adapt the margins on the content.
         */
        this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._opened = false;
        this.openedChange.subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            if (opened) {
                if (_this._doc) {
                    _this._elementFocusedBeforeDrawerWasOpened = (/** @type {?} */ (_this._doc.activeElement));
                }
                if (_this._isFocusTrapEnabled && _this._focusTrap) {
                    _this._trapFocus();
                }
            }
            else {
                _this._restoreFocus();
            }
        }));
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
         * and we don't have close disabled.
         */
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(_this._elementRef.nativeElement, 'keydown')))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] && !_this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event);
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.close();
                event.stopPropagation();
                event.preventDefault();
            })); }));
        }));
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var fromState = event.fromState, toState = event.toState;
            if ((toState.indexOf('open') === 0 && fromState === 'void') ||
                (toState === 'void' && fromState.indexOf('open') === 0)) {
                _this.openedChange.emit(_this._opened);
            }
        }));
    }
    Object.defineProperty(MatDrawer.prototype, "position", {
        /** The side that the drawer is attached to. */
        get: /**
         * The side that the drawer is attached to.
         * @return {?}
         */
        function () { return this._position; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Make sure we have a valid value.
            value = value === 'end' ? 'end' : 'start';
            if (value != this._position) {
                this._position = value;
                this.onPositionChanged.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "mode", {
        /** Mode of the drawer; one of 'over', 'push' or 'side'. */
        get: /**
         * Mode of the drawer; one of 'over', 'push' or 'side'.
         * @return {?}
         */
        function () { return this._mode; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mode = value;
            this._modeChanged.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "disableClose", {
        /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
        get: /**
         * Whether the drawer can be closed with the escape key or by clicking on the backdrop.
         * @return {?}
         */
        function () { return this._disableClose; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disableClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "autoFocus", {
        /** Whether the drawer should focus the first focusable element automatically when opened. */
        get: /**
         * Whether the drawer should focus the first focusable element automatically when opened.
         * @return {?}
         */
        function () { return this._autoFocus; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "_openedStream", {
        /** Event emitted when the drawer has been opened. */
        get: /**
         * Event emitted when the drawer has been opened.
         * @return {?}
         */
        function () {
            return this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return o; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((/**
             * @return {?}
             */
            function () { })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "openedStart", {
        /** Event emitted when the drawer has started opening. */
        get: /**
         * Event emitted when the drawer has started opening.
         * @return {?}
         */
        function () {
            return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.fromState !== e.toState && e.toState.indexOf('open') === 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((/**
             * @return {?}
             */
            function () { })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "_closedStream", {
        /** Event emitted when the drawer has been closed. */
        get: /**
         * Event emitted when the drawer has been closed.
         * @return {?}
         */
        function () {
            return this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return !o; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((/**
             * @return {?}
             */
            function () { })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "closedStart", {
        /** Event emitted when the drawer has started closing. */
        get: /**
         * Event emitted when the drawer has started closing.
         * @return {?}
         */
        function () {
            return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.fromState !== e.toState && e.toState === 'void'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((/**
             * @return {?}
             */
            function () { })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "_isFocusTrapEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            // The focus trap is only enabled when the drawer is open in any mode other than side.
            return this.opened && this.mode !== 'side';
        },
        enumerable: true,
        configurable: true
    });
    /** Traps focus inside the drawer. */
    /**
     * Traps focus inside the drawer.
     * @private
     * @return {?}
     */
    MatDrawer.prototype._trapFocus = /**
     * Traps focus inside the drawer.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autoFocus) {
            return;
        }
        this._focusTrap.focusInitialElementWhenReady().then((/**
         * @param {?} hasMovedFocus
         * @return {?}
         */
        function (hasMovedFocus) {
            // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
            // still works. We need to check that `focus` is a function due to Universal.
            if (!hasMovedFocus && typeof _this._elementRef.nativeElement.focus === 'function') {
                _this._elementRef.nativeElement.focus();
            }
        }));
    };
    /**
     * If focus is currently inside the drawer, restores it to where it was before the drawer
     * opened.
     */
    /**
     * If focus is currently inside the drawer, restores it to where it was before the drawer
     * opened.
     * @private
     * @return {?}
     */
    MatDrawer.prototype._restoreFocus = /**
     * If focus is currently inside the drawer, restores it to where it was before the drawer
     * opened.
     * @private
     * @return {?}
     */
    function () {
        if (!this.autoFocus) {
            return;
        }
        /** @type {?} */
        var activeEl = this._doc && this._doc.activeElement;
        if (activeEl && this._elementRef.nativeElement.contains(activeEl)) {
            if (this._elementFocusedBeforeDrawerWasOpened instanceof HTMLElement) {
                this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
            }
            else {
                this._elementRef.nativeElement.blur();
            }
        }
        this._elementFocusedBeforeDrawerWasOpened = null;
        this._openedVia = null;
    };
    /**
     * @return {?}
     */
    MatDrawer.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        this._focusTrap.enabled = this._isFocusTrapEnabled;
    };
    /**
     * @return {?}
     */
    MatDrawer.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // Enable the animations after the lifecycle hooks have run, in order to avoid animating
        // drawers that are open by default. When we're on the server, we shouldn't enable the
        // animations, because we don't want the drawer to animate the first time the user sees
        // the page.
        if (this._platform.isBrowser) {
            this._enableAnimations = true;
        }
    };
    /**
     * @return {?}
     */
    MatDrawer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
        this._animationStarted.complete();
        this._animationEnd.complete();
        this._modeChanged.complete();
        this._destroyed.next();
        this._destroyed.complete();
    };
    Object.defineProperty(MatDrawer.prototype, "opened", {
        /**
         * Whether the drawer is opened. We overload this because we trigger an event when it
         * starts or end.
         */
        get: /**
         * Whether the drawer is opened. We overload this because we trigger an event when it
         * starts or end.
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.toggle(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value)); },
        enumerable: true,
        configurable: true
    });
    /**
     * Open the drawer.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    /**
     * Open the drawer.
     * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     * @return {?}
     */
    MatDrawer.prototype.open = /**
     * Open the drawer.
     * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     * @return {?}
     */
    function (openedVia) {
        return this.toggle(true, openedVia);
    };
    /** Close the drawer. */
    /**
     * Close the drawer.
     * @return {?}
     */
    MatDrawer.prototype.close = /**
     * Close the drawer.
     * @return {?}
     */
    function () {
        return this.toggle(false);
    };
    /**
     * Toggle this drawer.
     * @param isOpen Whether the drawer should be open.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    /**
     * Toggle this drawer.
     * @param {?=} isOpen Whether the drawer should be open.
     * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     * @return {?}
     */
    MatDrawer.prototype.toggle = /**
     * Toggle this drawer.
     * @param {?=} isOpen Whether the drawer should be open.
     * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     * @return {?}
     */
    function (isOpen, openedVia) {
        var _this = this;
        if (isOpen === void 0) { isOpen = !this.opened; }
        if (openedVia === void 0) { openedVia = 'program'; }
        this._opened = isOpen;
        if (isOpen) {
            this._animationState = this._enableAnimations ? 'open' : 'open-instant';
            this._openedVia = openedVia;
        }
        else {
            this._animationState = 'void';
            this._restoreFocus();
        }
        if (this._focusTrap) {
            this._focusTrap.enabled = this._isFocusTrapEnabled;
        }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe((/**
             * @param {?} open
             * @return {?}
             */
            function (open) { return resolve(open ? 'open' : 'close'); }));
        }));
    };
    Object.defineProperty(MatDrawer.prototype, "_width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement ? (this._elementRef.nativeElement.offsetWidth || 0) : 0;
        },
        enumerable: true,
        configurable: true
    });
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    MatDrawer.prototype._animationStartListener = 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationStarted.next(event);
    };
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    MatDrawer.prototype._animationDoneListener = 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationEnd.next(event);
    };
    MatDrawer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-drawer',
                    exportAs: 'matDrawer',
                    template: "<div class=\"mat-drawer-inner-container\"><ng-content></ng-content></div>",
                    animations: [matDrawerAnimations.transformDrawer],
                    host: {
                        'class': 'mat-drawer',
                        // must prevent the browser from aligning text based on value
                        '[attr.align]': 'null',
                        '[class.mat-drawer-end]': 'position === "end"',
                        '[class.mat-drawer-over]': 'mode === "over"',
                        '[class.mat-drawer-push]': 'mode === "push"',
                        '[class.mat-drawer-side]': 'mode === "side"',
                        'tabIndex': '-1',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatDrawer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusTrapFactory"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] }
    ]; };
    MatDrawer.propDecorators = {
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        disableClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        _animationState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["HostBinding"], args: ['@transform',] }],
        openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['opened',] }],
        openedStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['closed',] }],
        closedStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onPositionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['positionChanged',] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        _animationStartListener: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["HostListener"], args: ['@transform.start', ['$event'],] }],
        _animationDoneListener: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["HostListener"], args: ['@transform.done', ['$event'],] }]
    };
    return MatDrawer;
}());
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
var MatDrawerContainer = /** @class */ (function () {
    function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize, _animationMode) {
        var _this = this;
        if (defaultAutosize === void 0) { defaultAutosize = false; }
        this._dir = _dir;
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /**
         * Event emitted when the drawer backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Emits on every ngDoCheck. Used for debouncing reflows.
         */
        this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Margins to be applied to the content. These are used to push / shrink the drawer content when a
         * drawer is open. We use margin rather than transform even for push mode because transform breaks
         * fixed position elements inside of the transformed element.
         */
        this._contentMargins = { left: null, right: null };
        this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        // If a `Dir` directive exists up the tree, listen direction changes
        // and update the left/right properties to point to the proper start/end.
        if (_dir) {
            _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._validateDrawers();
                _this.updateContentMargins();
            }));
        }
        // Since the minimum width of the sidenav depends on the viewport width,
        // we need to recompute the margins if the viewport changes.
        viewportRuler.change()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateContentMargins(); }));
        this._autosize = defaultAutosize;
    }
    Object.defineProperty(MatDrawerContainer.prototype, "start", {
        /** The drawer child with the `start` position. */
        get: /**
         * The drawer child with the `start` position.
         * @return {?}
         */
        function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "end", {
        /** The drawer child with the `end` position. */
        get: /**
         * The drawer child with the `end` position.
         * @return {?}
         */
        function () { return this._end; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "autosize", {
        /**
         * Whether to automatically resize the container whenever
         * the size of any of its drawers changes.
         *
         * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
         * the drawers on every change detection cycle. Can be configured globally via the
         * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
         */
        get: /**
         * Whether to automatically resize the container whenever
         * the size of any of its drawers changes.
         *
         * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
         * the drawers on every change detection cycle. Can be configured globally via the
         * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
         * @return {?}
         */
        function () { return this._autosize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autosize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "hasBackdrop", {
        /**
         * Whether the drawer container should have a backdrop while one of the sidenavs is open.
         * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
         * mode as well.
         */
        get: /**
         * Whether the drawer container should have a backdrop while one of the sidenavs is open.
         * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
         * mode as well.
         * @return {?}
         */
        function () {
            if (this._backdropOverride == null) {
                return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
            }
            return this._backdropOverride;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._backdropOverride = value == null ? null : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "scrollable", {
        /** Reference to the CdkScrollable instance that wraps the scrollable content. */
        get: /**
         * Reference to the CdkScrollable instance that wraps the scrollable content.
         * @return {?}
         */
        function () {
            return this._userContent || this._content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDrawerContainer.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._validateDrawers();
            _this._drawers.forEach((/**
             * @param {?} drawer
             * @return {?}
             */
            function (drawer) {
                _this._watchDrawerToggle(drawer);
                _this._watchDrawerPosition(drawer);
                _this._watchDrawerMode(drawer);
            }));
            if (!_this._drawers.length ||
                _this._isDrawerOpen(_this._start) ||
                _this._isDrawerOpen(_this._end)) {
                _this.updateContentMargins();
            }
            _this._changeDetectorRef.markForCheck();
        }));
        this._doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(10), // Arbitrary debounce time, less than a frame at 60fps
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateContentMargins(); }));
    };
    /**
     * @return {?}
     */
    MatDrawerContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Calls `open` of both start and end drawers */
    /**
     * Calls `open` of both start and end drawers
     * @return {?}
     */
    MatDrawerContainer.prototype.open = /**
     * Calls `open` of both start and end drawers
     * @return {?}
     */
    function () {
        this._drawers.forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        function (drawer) { return drawer.open(); }));
    };
    /** Calls `close` of both start and end drawers */
    /**
     * Calls `close` of both start and end drawers
     * @return {?}
     */
    MatDrawerContainer.prototype.close = /**
     * Calls `close` of both start and end drawers
     * @return {?}
     */
    function () {
        this._drawers.forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        function (drawer) { return drawer.close(); }));
    };
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     */
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     * @return {?}
     */
    MatDrawerContainer.prototype.updateContentMargins = /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     * @return {?}
     */
    function () {
        var _this = this;
        // 1. For drawers in `over` mode, they don't affect the content.
        // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
        //    left margin (for left drawer) or right margin (for right the drawer).
        // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
        //    adding to the left or right margin and simultaneously subtracting the same amount of
        //    margin from the other side.
        /** @type {?} */
        var left = 0;
        /** @type {?} */
        var right = 0;
        if (this._left && this._left.opened) {
            if (this._left.mode == 'side') {
                left += this._left._width;
            }
            else if (this._left.mode == 'push') {
                /** @type {?} */
                var width = this._left._width;
                left += width;
                right -= width;
            }
        }
        if (this._right && this._right.opened) {
            if (this._right.mode == 'side') {
                right += this._right._width;
            }
            else if (this._right.mode == 'push') {
                /** @type {?} */
                var width = this._right._width;
                right += width;
                left -= width;
            }
        }
        // If either `right` or `left` is zero, don't set a style to the element. This
        // allows users to specify a custom size via CSS class in SSR scenarios where the
        // measured widths will always be zero. Note that we reset to `null` here, rather
        // than below, in order to ensure that the types in the `if` below are consistent.
        left = left || (/** @type {?} */ (null));
        right = right || (/** @type {?} */ (null));
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = { left: left, right: right };
            // Pull back into the NgZone since in some cases we could be outside. We need to be careful
            // to do it only when something changed, otherwise we can end up hitting the zone too often.
            this._ngZone.run((/**
             * @return {?}
             */
            function () { return _this._contentMarginChanges.next(_this._contentMargins); }));
        }
    };
    /**
     * @return {?}
     */
    MatDrawerContainer.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If users opted into autosizing, do a check every change detection cycle.
        if (this._autosize && this._isPushed()) {
            // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this._doCheckSubject.next(); }));
        }
    };
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    MatDrawerContainer.prototype._watchDrawerToggle = /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    function (drawer) {
        var _this = this;
        drawer._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.fromState !== event.toState; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._drawers.changes))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && _this._animationMode !== 'NoopAnimations') {
                _this._element.nativeElement.classList.add('mat-drawer-transition');
            }
            _this.updateContentMargins();
            _this._changeDetectorRef.markForCheck();
        }));
        if (drawer.mode !== 'side') {
            drawer.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._drawers.changes)).subscribe((/**
             * @return {?}
             */
            function () {
                return _this._setContainerClass(drawer.opened);
            }));
        }
    };
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     */
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    MatDrawerContainer.prototype._watchDrawerPosition = /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    function (drawer) {
        var _this = this;
        if (!drawer) {
            return;
        }
        // NOTE: We need to wait for the microtask queue to be empty before validating,
        // since both drawers may be swapping positions at the same time.
        drawer.onPositionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._drawers.changes)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._validateDrawers();
            }));
        }));
    };
    /** Subscribes to changes in drawer mode so we can run change detection. */
    /**
     * Subscribes to changes in drawer mode so we can run change detection.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    MatDrawerContainer.prototype._watchDrawerMode = /**
     * Subscribes to changes in drawer mode so we can run change detection.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    function (drawer) {
        var _this = this;
        if (drawer) {
            drawer._modeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this._drawers.changes, this._destroyed)))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateContentMargins();
                _this._changeDetectorRef.markForCheck();
            }));
        }
    };
    /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
    /**
     * Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element.
     * @private
     * @param {?} isAdd
     * @return {?}
     */
    MatDrawerContainer.prototype._setContainerClass = /**
     * Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element.
     * @private
     * @param {?} isAdd
     * @return {?}
     */
    function (isAdd) {
        if (isAdd) {
            this._element.nativeElement.classList.add('mat-drawer-opened');
        }
        else {
            this._element.nativeElement.classList.remove('mat-drawer-opened');
        }
    };
    /** Validate the state of the drawer children components. */
    /**
     * Validate the state of the drawer children components.
     * @private
     * @return {?}
     */
    MatDrawerContainer.prototype._validateDrawers = /**
     * Validate the state of the drawer children components.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._start = this._end = null;
        // Ensure that we have at most one start and one end drawer.
        this._drawers.forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        function (drawer) {
            if (drawer.position == 'end') {
                if (_this._end != null) {
                    throwMatDuplicatedDrawerError('end');
                }
                _this._end = drawer;
            }
            else {
                if (_this._start != null) {
                    throwMatDuplicatedDrawerError('start');
                }
                _this._start = drawer;
            }
        }));
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir && this._dir.value === 'rtl') {
            this._left = this._end;
            this._right = this._start;
        }
        else {
            this._left = this._start;
            this._right = this._end;
        }
    };
    /** Whether the container is being pushed to the side by one of the drawers. */
    /**
     * Whether the container is being pushed to the side by one of the drawers.
     * @private
     * @return {?}
     */
    MatDrawerContainer.prototype._isPushed = /**
     * Whether the container is being pushed to the side by one of the drawers.
     * @private
     * @return {?}
     */
    function () {
        return (this._isDrawerOpen(this._start) && this._start.mode != 'over') ||
            (this._isDrawerOpen(this._end) && this._end.mode != 'over');
    };
    /**
     * @return {?}
     */
    MatDrawerContainer.prototype._onBackdropClicked = /**
     * @return {?}
     */
    function () {
        this.backdropClick.emit();
        this._closeModalDrawer();
    };
    /**
     * @return {?}
     */
    MatDrawerContainer.prototype._closeModalDrawer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Close all open drawers where closing is not disabled and the mode is not `side`.
        [this._start, this._end]
            .filter((/**
         * @param {?} drawer
         * @return {?}
         */
        function (drawer) { return drawer && !drawer.disableClose && _this._canHaveBackdrop(drawer); }))
            .forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        function (drawer) { return (/** @type {?} */ (drawer)).close(); }));
    };
    /**
     * @return {?}
     */
    MatDrawerContainer.prototype._isShowingBackdrop = /**
     * @return {?}
     */
    function () {
        return (this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start)) ||
            (this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end));
    };
    /**
     * @private
     * @param {?} drawer
     * @return {?}
     */
    MatDrawerContainer.prototype._canHaveBackdrop = /**
     * @private
     * @param {?} drawer
     * @return {?}
     */
    function (drawer) {
        return drawer.mode !== 'side' || !!this._backdropOverride;
    };
    /**
     * @private
     * @param {?} drawer
     * @return {?}
     */
    MatDrawerContainer.prototype._isDrawerOpen = /**
     * @private
     * @param {?} drawer
     * @return {?}
     */
    function (drawer) {
        return drawer != null && drawer.opened;
    };
    MatDrawerContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-drawer-container',
                    exportAs: 'matDrawerContainer',
                    template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\" [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div><ng-content select=\"mat-drawer\"></ng-content><ng-content select=\"mat-drawer-content\"></ng-content><mat-drawer-content *ngIf=\"!_content\"><ng-content></ng-content></mat-drawer-content>",
                    styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-opened{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}@media (-ms-high-contrast:active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}@media (-ms-high-contrast:active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media (-ms-high-contrast:active){.mat-drawer.mat-drawer-end,[dir=rtl] .mat-drawer{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
                    host: {
                        'class': 'mat-drawer-container',
                        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatDrawerContainer.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [MAT_DRAWER_DEFAULT_AUTOSIZE,] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatDrawerContainer.propDecorators = {
        _drawers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [MatDrawer,] }],
        _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"], args: [MatDrawerContent, { static: false },] }],
        _userContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [MatDrawerContent, { static: false },] }],
        autosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        backdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return MatDrawerContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSidenavContent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSidenavContent, _super);
    function MatSidenavContent(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
        return _super.call(this, changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) || this;
    }
    MatSidenavContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-sidenav-content',
                    template: '<ng-content></ng-content>',
                    host: {
                        'class': 'mat-drawer-content mat-sidenav-content',
                        '[style.margin-left.px]': '_container._contentMargins.left',
                        '[style.margin-right.px]': '_container._contentMargins.right',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatSidenavContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] },
        { type: MatSidenavContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return MatSidenavContainer; })),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"] }
    ]; };
    return MatSidenavContent;
}(MatDrawerContent));
var MatSidenav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSidenav, _super);
    function MatSidenav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fixedInViewport = false;
        _this._fixedTopGap = 0;
        _this._fixedBottomGap = 0;
        return _this;
    }
    Object.defineProperty(MatSidenav.prototype, "fixedInViewport", {
        /** Whether the sidenav is fixed in the viewport. */
        get: /**
         * Whether the sidenav is fixed in the viewport.
         * @return {?}
         */
        function () { return this._fixedInViewport; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._fixedInViewport = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSidenav.prototype, "fixedTopGap", {
        /**
         * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
         * mode.
         */
        get: /**
         * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
         * mode.
         * @return {?}
         */
        function () { return this._fixedTopGap; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._fixedTopGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSidenav.prototype, "fixedBottomGap", {
        /**
         * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
         * fixed mode.
         */
        get: /**
         * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
         * fixed mode.
         * @return {?}
         */
        function () { return this._fixedBottomGap; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._fixedBottomGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    MatSidenav.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-sidenav',
                    exportAs: 'matSidenav',
                    template: "<div class=\"mat-drawer-inner-container\"><ng-content></ng-content></div>",
                    animations: [matDrawerAnimations.transformDrawer],
                    host: {
                        'class': 'mat-drawer mat-sidenav',
                        'tabIndex': '-1',
                        // must prevent the browser from aligning text based on value
                        '[attr.align]': 'null',
                        '[class.mat-drawer-end]': 'position === "end"',
                        '[class.mat-drawer-over]': 'mode === "over"',
                        '[class.mat-drawer-push]': 'mode === "push"',
                        '[class.mat-drawer-side]': 'mode === "side"',
                        '[class.mat-sidenav-fixed]': 'fixedInViewport',
                        '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
                        '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                },] },
    ];
    MatSidenav.propDecorators = {
        fixedInViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        fixedTopGap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        fixedBottomGap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
    };
    return MatSidenav;
}(MatDrawer));
var MatSidenavContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSidenavContainer, _super);
    function MatSidenavContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatSidenavContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-sidenav-container',
                    exportAs: 'matSidenavContainer',
                    template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\" [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div><ng-content select=\"mat-sidenav\"></ng-content><ng-content select=\"mat-sidenav-content\"></ng-content><mat-sidenav-content *ngIf=\"!_content\" cdkScrollable><ng-content></ng-content></mat-sidenav-content>",
                    styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-opened{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}@media (-ms-high-contrast:active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}@media (-ms-high-contrast:active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media (-ms-high-contrast:active){.mat-drawer.mat-drawer-end,[dir=rtl] .mat-drawer{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
                    host: {
                        'class': 'mat-drawer-container mat-sidenav-container',
                        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                },] },
    ];
    MatSidenavContainer.propDecorators = {
        _drawers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [MatSidenav,] }],
        _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"], args: [MatSidenavContent, { static: false },] }]
    };
    return MatSidenavContainer;
}(MatDrawerContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSidenavModule = /** @class */ (function () {
    function MatSidenavModule() {
    }
    MatSidenavModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
                        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"],
                    ],
                    exports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"],
                        MatDrawer,
                        MatDrawerContainer,
                        MatDrawerContent,
                        MatSidenav,
                        MatSidenavContainer,
                        MatSidenavContent,
                    ],
                    declarations: [
                        MatDrawer,
                        MatDrawerContainer,
                        MatDrawerContent,
                        MatSidenav,
                        MatSidenavContainer,
                        MatSidenavContent,
                    ],
                },] },
    ];
    return MatSidenavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=sidenav.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-product/add-product.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-product/add-product.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layout-container\">\n\n  <div class=\"addProduct\">\n\n    <form #myForm=\"ngForm\">\n\n      <mat-form-field class=\"example-full-width \">\n        <input NgControl matInput #prName=\"ngModel\" required minlength=\"2\" placeholder=\"product name\" name=\"productName\"\n          [(ngModel)]=\"product.productName\">\n      </mat-form-field>\n\n      <span *ngIf=\"prName.errors?.required && prName.touched\"> Name is required</span>\n      <span *ngIf=\"prName.errors?.minlength && prName.touched\"> Name too short</span>\n\n      <mat-form-field class=\"example-full-width \">\n        <mat-label>select category</mat-label>\n        <mat-select name=\"categoryName\" #prCategory=\"ngModel\" required minlength=\"3\" [(ngModel)]=\"product.categoryName\">\n          <mat-option *ngFor=\"let c of categories\" [value]=\"c._id\">{{c.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <span *ngIf=\"prCategory.errors?.required && prCategory.touched\"> Category is required</span>\n      <span *ngIf=\"prCategory.errors?.minlength && prCategory.touched\"> Category too short</span>\n\n      <mat-form-field class=\"example-full-width \">\n        <input type=\"number\" NgControl matInput #prPrice=\"ngModel\" required value=\"1\" min=\"1\" max=\"1000\"\n          placeholder=\"price\" name=\"price\" [(ngModel)]=\"product.price\">\n      </mat-form-field>\n\n      <span *ngIf=\"prPrice.errors?.required && prPrice.touched\"> Price is required</span>\n      <span *ngIf=\"prPrice.errors?.min && prPrice.touched\">1 or more</span>\n      <span *ngIf=\"priceError\">{{priceError}}</span>\n\n      <div class=\"form-group\">\n\n        <input type=\"file\" accept=\"image/png,image/jpeg\" class=\"form-control-file\" (change)=\"onFileSelected($event)\">\n\n      </div>\n\n      <button [disabled]=\"myForm.form.invalid\" type=\"button\" (click)=\"onUpload()\">upload</button>\n\n    </form>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-board/admin-board.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-board/admin-board.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin-panel-container\">\n\n  <!-- side-panel-header - add product -->\n  <div class=\"admin-side-panel\" fxFlex=\"100%\" fxFlexAlign=\"stretch\">\n\n    <div class=\"side-panel-header\">\n\n      <div (click)=\"addProduct()\">\n\n        <h3 class=\"side-panel-h3\">ADD PRODUCT</h3>\n\n        <i class=\"fas fa-plus\"></i>\n\n      </div>\n\n      <hr>\n\n      <router-outlet></router-outlet>\n\n    </div>\n\n    <div>\n\n    </div>\n  </div>\n\n  <!-- admin-categories-panel -->\n  <div class=\"admin-categories-panel\" fxFlex=\"25%\">\n\n    <div *ngIf=\"categories\">\n\n      <mat-chip (click)=\"showAllProducts()\" color=\"primary\" selected>all Products</mat-chip>\n\n      <mat-chip-list *ngFor=\"let c of categories\" class=\"chips-buttons\">\n\n        <mat-chip (click)=\" changeCategory(c._id)\" color=\"primary\" selected>{{c.name}}</mat-chip>\n\n      </mat-chip-list>\n\n    </div>\n\n  </div>\n\n  <!-- products display -->\n  <div class=\"siteProducts\" fxFlex=\"75%\" fxLayout=\"row\" [style.display]=\"mainProductPage\">\n\n    <div class=\"products-container\">\n\n      <div *ngFor=\"let p of products\" class=\"product-div\">\n\n        <div fxFlex=\"25 \">\n\n          <mat-card class=\"example-card productCard \" (click)=\"updateProduct(p)\">\n            {{p.productName}}\n            <br>\n            <img src=\"http://localhost:3000/{{p.productImage}}\" alt=\"\" class=\"productImage\">\n            <br>\n            {{p.price}}$\n            <br>\n            {{p.categoryName.name}}\n\n          </mat-card>\n\n        </div> \n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-product/update-product.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-product/update-product.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addProduct\">\n\n  <h4 class=\"h4-update\">Update</h4>\n\n  <form *ngIf=\"productToUpdate\" #myForm=\"ngForm\">\n\n    <mat-form-field class=\"example-full-width \">\n      <input NgControl  matInput placeholder=\"{{productToUpdate.productName}}\"\n        name=\"name\" [(ngModel)]=\"product.productName\" [value]=\"productToUpdate.productName\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width \">\n      <mat-label>{{productToUpdate.categoryName.name}}</mat-label>\n      <mat-select   name=\"categoryName\" [(ngModel)]=\"product.categoryName\">\n        <mat-option *ngFor=\"let c of categories\" [value]=\"c._id\">{{c.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    \n    <mat-form-field class=\"example-full-width \">\n      <input type=\"number\"  NgControl matInput name=\"price\"\n        [(ngModel)]=\"product.price\" [value]=\"productToUpdate.price\" placeholder=\"{{productToUpdate.price}}\">\n    </mat-form-field>\n\n\n    <input type=\"file\" class=\"form-control-file\" (change)=\"onFileSelected($event)\">\n    <button  type=\"button\" (click)=\"onUpload()\">upload</button>\n  \n</form>\n\n</div>\n");

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".layout-container {\n  display: -webkit-box;\n  display: flex;\n}\n\n.addProduct {\n  width: 200px;\n  height: 200px;\n}\n\nform > span {\n  color: red;\n  text-align: left;\n  position: absolute;\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9DOlxcVXNlcnNcXGlsYW5cXERlc2t0b3BcXNek16jXldeZ16fXmNeZ150g16rXm9eg15XXqiDXkNeZ15zXn1xcc3VwZXJtYXJrZXQgMjAwNjE5XFxzdXBlcm1hcmtldC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYWRkUHJvZHVjdHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbmZvcm0gPiBzcGFuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn0iLCIubGF5b3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGRQcm9kdWN0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5mb3JtID4gc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");






var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(adminService, productsService, http) {
        this.adminService = adminService;
        this.productsService = productsService;
        this.http = http;
        this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.priceError = "";
        this.selectedFile = null;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var categoriesFromCollection = this.productsService.GetAllCategories();
        categoriesFromCollection.subscribe(function (category) {
            _this.categories = category;
        });
    };
    AddProductComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddProductComponent.prototype.onUpload = function () {
        var _this = this;
        if (this.product.price <= 0 || this.product.price > 1000) {
            this.priceError = "number between 1-1000";
            return false;
        }
        var fd = new FormData();
        fd.append("productName", this.product.productName);
        fd.append("categoryName", this.product.categoryName);
        fd.append("price", this.product.price);
        fd.append("productImage", this.selectedFile, this.selectedFile.name);
        var newProduct = this.adminService.addProduct(fd);
        newProduct.subscribe(function (p) {
            _this.ngOnInit();
        });
    };
    AddProductComponent.ctorParameters = function () { return [
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
        { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-product/add-product.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.scss */ "./src/app/components/add-product/add-product.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-board/admin-board.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-board/admin-board.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admin-panel-container {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n}\n\n.admin-side-panel {\n  -webkit-box-flex: 1;\n          flex: 1;\n  min-width: 150px;\n  background-color: #b7a63a;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 25%;\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.admin-categories-panel {\n  position: relative;\n  background-color: crimson;\n  height: 20%;\n  width: 75%;\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n  overflow: visible;\n}\n\n.side-panel-header h3 {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.siteProducts {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  background-color: yellow;\n  max-width: 75%;\n  max-height: 80%;\n  -webkit-box-ordinal-group: 4;\n          order: 3;\n  height: 80%;\n  width: 75%;\n}\n\n.chips-buttons {\n  position: relative;\n  margin-top: 20px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.products-container {\n  position: absolute;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  overflow: auto;\n}\n\n.product-div {\n  min-width: 200px;\n  height: 150px;\n  max-height: 150px;\n  margin: 4px;\n  display: inline-block;\n}\n\n.productCard {\n  width: 200px;\n  height: 150px;\n  margin: 4px;\n  display: inline-block;\n  font-size: 12px;\n}\n\n.productImage {\n  width: 45px;\n}\n\ndiv.mat-tab-label {\n  min-width: 80px;\n  padding: 0 8px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1ib2FyZC9DOlxcVXNlcnNcXGlsYW5cXERlc2t0b3BcXNek16jXldeZ16fXmNeZ150g16rXm9eg15XXqiDXkNeZ15zXn1xcc3VwZXJtYXJrZXQgMjAwNjE5XFxzdXBlcm1hcmtldC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRtaW4tYm9hcmRcXGFkbWluLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWJvYXJkL2FkbWluLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO1VBQUEsUUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7VUFBQSxRQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7QUNDSjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO1VBQUEsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBOztFQUVFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWJvYXJkL2FkbWluLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLXBhbmVsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbn1cclxuXHJcbi5hZG1pbi1zaWRlLXBhbmVsIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YTYzYTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIG9yZGVyOiAxO1xyXG59XHJcblxyXG4uYWRtaW4tY2F0ZWdvcmllcy1wYW5lbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBvcmRlcjogMjtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLnNpZGUtcGFuZWwtaGVhZGVyICBoMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLnNpdGVQcm9kdWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxuICBvcmRlcjogMztcclxuICBoZWlnaHQ6IDgwJTtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uY2hpcHMtYnV0dG9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kaXYge1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0Q2FyZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3RJbWFnZSB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuXHJcbmRpdi5tYXQtdGFiLWxhYmVsIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG5cclxuIiwiLmFkbWluLXBhbmVsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbn1cblxuLmFkbWluLXNpZGUtcGFuZWwge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdhNjNhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNSU7XG4gIG9yZGVyOiAxO1xufVxuXG4uYWRtaW4tY2F0ZWdvcmllcy1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiA3NSU7XG4gIG9yZGVyOiAyO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnNpZGUtcGFuZWwtaGVhZGVyIGgzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5zaXRlUHJvZHVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgb3JkZXI6IDM7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogNzUlO1xufVxuXG4uY2hpcHMtYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5wcm9kdWN0cy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJvZHVjdC1kaXYge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2R1Y3RDYXJkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9kdWN0SW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbn1cblxuZGl2Lm1hdC10YWItbGFiZWwge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/admin-board/admin-board.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-board/admin-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBoardComponent", function() { return AdminBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_redux_action_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/redux/action-type */ "./src/app/redux/action-type.ts");








var AdminBoardComponent = /** @class */ (function () {
    function AdminBoardComponent(router, http, adminService, productsService, redux) {
        this.router = router;
        this.http = http;
        this.adminService = adminService;
        this.productsService = productsService;
        this.redux = redux;
        this.mainProductPage = "flex";
    }
    AdminBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var categoriesFromCollection = this.productsService.GetAllCategories();
        categoriesFromCollection.subscribe(function (category) {
            _this.categories = category;
        });
        this.products = this.redux.getState().products;
        var productsFromCollection = this.productsService.GetAllProducts();
        productsFromCollection.subscribe(function (product) {
            _this.products = product;
        });
    };
    AdminBoardComponent.prototype.showAllProducts = function () {
        this.mainProductPage = "flex";
        this.ngOnInit();
    };
    AdminBoardComponent.prototype.addProduct = function () {
        this.router.navigate(["admin/admin-board/app-add-product"], { relativeTo: this.route });
        this.ngOnInit();
    };
    AdminBoardComponent.prototype.changeCategory = function (id) {
        var _this = this;
        var productsByCategories = this.productsService.GetAllProductsByCategory(id);
        productsByCategories.subscribe(function (product) {
            _this.products = product;
        });
    };
    AdminBoardComponent.prototype.updateProduct = function (p) {
        this.forUpdate = p;
        var action = { type: src_app_redux_action_type__WEBPACK_IMPORTED_MODULE_7__["ActionType"].UpdateProduct, payload: this.forUpdate };
        this.redux.dispatch(action); // Will operate the recuder function.
        this.router.navigate(["admin/admin-board/app-update-product", p._id], { relativeTo: this.route });
    };
    AdminBoardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminBoardComponent.prototype, "forUpdate", void 0);
    AdminBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-board',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-board/admin-board.component.html")).default,
            inputs: ['forUpdate'],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-board.component.scss */ "./src/app/components/admin-board/admin-board.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"]])
    ], AdminBoardComponent);
    return AdminBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/update-product/update-product.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-product/update-product.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addProduct {\n  width: 200px;\n  height: 200px;\n}\n\nform > span {\n  color: red;\n  text-align: left;\n  position: absolute;\n  margin: 2px;\n}\n\n.h4-update {\n  text-align: center;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtcHJvZHVjdC9DOlxcVXNlcnNcXGlsYW5cXERlc2t0b3BcXNek16jXldeZ16fXmNeZ150g16rXm9eg15XXqiDXkNeZ15zXn1xcc3VwZXJtYXJrZXQgMjAwNjE5XFxzdXBlcm1hcmtldC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXBkYXRlLXByb2R1Y3RcXHVwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1wcm9kdWN0L3VwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtcHJvZHVjdC91cGRhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRQcm9kdWN0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuZm9ybT5zcGFuIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uaDQtdXBkYXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIiwiLmFkZFByb2R1Y3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmZvcm0gPiBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmg0LXVwZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/update-product/update-product.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-product/update-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductComponent", function() { return UpdateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UpdateProductComponent = /** @class */ (function () {
    function UpdateProductComponent(adminService, productsService, http, redux, router) {
        this.adminService = adminService;
        this.productsService = productsService;
        this.http = http;
        this.redux = redux;
        this.router = router;
        this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.productToUpdate = new src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.priceError = "";
        this.selectedFile = null;
    }
    UpdateProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productToUpdate = this.redux.getState().productToUpdate;
        this.redux.subscribe(function () {
            var productCh = _this.redux.getState().productToUpdate;
            _this.productToUpdate = productCh;
        });
        var categoriesFromCollection = this.productsService.GetAllCategories();
        categoriesFromCollection.subscribe(function (category) {
            _this.categories = category;
        });
    };
    UpdateProductComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    UpdateProductComponent.prototype.onUpload = function () {
        // if (this.product.price <= 0 || this.product.price > 1000) {
        //     this.priceError = "number between 1-1000";
        //     return false;
        // }
        var fd = new FormData();
        fd.append("productName", this.product.productName);
        fd.append("categoryName", this.product.categoryName);
        fd.append("price", this.product.price);
        if (this.selectedFile) {
            fd.append("productImage", this.selectedFile, this.selectedFile.name);
        }
        var newProduct = this.adminService.updatePartialProduct(this.productToUpdate._id, fd);
        newProduct.subscribe(function (p) {
        });
    };
    UpdateProductComponent.ctorParameters = function () { return [
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    UpdateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-product',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-product/update-product.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-product.component.scss */ "./src/app/components/update-product/update-product.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UpdateProductComponent);
    return UpdateProductComponent;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Product = /** @class */ (function () {
    function Product(_id, productName, categoryName, // forign key
    price, productImage) {
        this._id = _id;
        this.productName = productName;
        this.categoryName = categoryName;
        this.price = price;
        this.productImage = productImage;
    }
    ;
    return Product;
}());

;


/***/ }),

/***/ "./src/app/modules/admin-router.module.ts":
/*!************************************************!*\
  !*** ./src/app/modules/admin-router.module.ts ***!
  \************************************************/
/*! exports provided: AdminRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRouterModule", function() { return AdminRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin-board/admin-board.component */ "./src/app/components/admin-board/admin-board.component.ts");
/* harmony import */ var _services_login_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login-guard.service */ "./src/app/services/login-guard.service.ts");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var _components_update_product_update_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/update-product/update-product.component */ "./src/app/components/update-product/update-product.component.ts");








var adminRoutes = [
    {
        path: "", component: _components_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__["AdminBoardComponent"], canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminLoginGuardService"]],
        children: [
            { path: 'app-add-product', component: _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"] },
            { path: 'app-update-product/:id', component: _components_update_product_update_product_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProductComponent"] }
        ]
    },
];
var AdminRouterModule = /** @class */ (function () {
    function AdminRouterModule() {
    }
    AdminRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(adminRoutes)
            ],
        })
    ], AdminRouterModule);
    return AdminRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/admin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/admin.module.ts ***!
  \*****************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin-board/admin-board.component */ "./src/app/components/admin-board/admin-board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-router.module */ "./src/app/modules/admin-router.module.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var _components_update_product_update_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/update-product/update-product.component */ "./src/app/components/update-product/update-product.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
























var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _components_admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__["AdminBoardComponent"], _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__["AddProductComponent"], _components_update_product_update_product_component__WEBPACK_IMPORTED_MODULE_21__["UpdateProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _admin_router_module__WEBPACK_IMPORTED_MODULE_8__["AdminRouterModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_20__["AngularFileUploaderModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/services/login-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AdminLoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginGuardService", function() { return AdminLoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);




var AdminLoginGuardService = /** @class */ (function () {
    function AdminLoginGuardService(redux, router) {
        this.redux = redux;
        this.router = router;
    }
    AdminLoginGuardService.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnapshot) {
        if (this.redux.getState().isLoggedIn) {
            return true;
        }
        this.router.navigate(["/login"], { queryParams: { redirect: routerStateSnapshot.url } });
        return false;
    };
    AdminLoginGuardService.ctorParameters = function () { return [
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminLoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminLoginGuardService);
    return AdminLoginGuardService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-module.js.map