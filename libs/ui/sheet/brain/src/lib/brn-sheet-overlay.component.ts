import { ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { SET_CLASS_TO_CUSTOM_ELEMENT_TOKEN } from '@ng-spartan/ui/core/brain';
import { BrnDialogOverlayComponent } from '@ng-spartan/ui/dialog/brain';

@Component({
  selector: 'brn-sheet-overlay',
  standalone: true,
  providers: [
    {
      provide: SET_CLASS_TO_CUSTOM_ELEMENT_TOKEN,
      useExisting: forwardRef(() => BrnSheetOverlayComponent),
    },
  ],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BrnSheetOverlayComponent extends BrnDialogOverlayComponent {}
