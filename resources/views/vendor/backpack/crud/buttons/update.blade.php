@if ($crud->hasAccess('update'))
	@if (!$crud->model->translationEnabled())
        <a
            href="{{ url($crud->route.'/'.$entry->getKey().'/edit') }}"
            class="btn btn-sm btn-link text-info tooltip-selector"
            title="{{ trans('backpack::crud.edit') }}"
            data-toggle="tooltip"
            data-placement="bottom"
        >
            <i class="la la-edit"></i>
        </a>
	@else
        <div class="btn-group">
            <a
                href="{{ url($crud->route.'/'.$entry->getKey().'/edit') }}"
                class="btn btn-sm btn-link pr-0 text-info tooltip-selector"
                title="{{ trans('backpack::crud.edit') }}"
                data-toggle="tooltip"
                data-placement="bottom"
            >
                <i class="la la-edit"></i>
            </a>
            <a class="btn btn-sm btn-link dropdown-toggle text-primary pl-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="caret"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
                <li class="dropdown-header">{{ trans('backpack::crud.edit_translations') }}:</li>
                @foreach ($crud->model->getAvailableLocales() as $key => $locale)
                    <a class="dropdown-item" href="{{ url($crud->route.'/'.$entry->getKey().'/edit') }}?locale={{ $key }}">{{ $locale }}</a>
                @endforeach
            </ul>
        </div>
	@endif
@endif
