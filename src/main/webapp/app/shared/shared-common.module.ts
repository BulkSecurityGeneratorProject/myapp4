import { NgModule } from '@angular/core';

import { Myapp4SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Myapp4SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Myapp4SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Myapp4SharedCommonModule {}
